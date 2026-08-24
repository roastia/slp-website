import { NextResponse } from "next/server";

const BUTTONDOWN_ENDPOINT = "https://api.buttondown.com/v1/subscribers";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(request: Request): string | undefined {
  // Vercel sets x-forwarded-for to "client, proxy1, proxy2, ...".
  // The first entry is the original visitor's IP address.
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: Request) {
  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    console.error("BUTTONDOWN_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const ipAddress = getClientIp(request);

  async function subscribe() {
    return fetch(BUTTONDOWN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        ...(ipAddress ? { ip_address: ipAddress } : {}),
      }),
    });
  }

  async function findSubscriberId(emailAddress: string): Promise<string | null> {
    const lookupUrl = `${BUTTONDOWN_ENDPOINT}?email_address=${encodeURIComponent(emailAddress)}`;
    const lookupResponse = await fetch(lookupUrl, {
      headers: { Authorization: `Token ${apiKey}` },
    });
    if (!lookupResponse.ok) return null;
    const lookupBody = await lookupResponse.json().catch(() => null);
    const results = (lookupBody as { results?: Array<{ id?: string; email_address?: string }> } | null)?.results;
    const match = results?.find((r) => r.email_address?.toLowerCase() === emailAddress.toLowerCase());
    return match?.id ?? results?.[0]?.id ?? null;
  }

  async function reactivateAsRegular(subscriberId: string) {
    return fetch(`${BUTTONDOWN_ENDPOINT}/${subscriberId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "regular" }),
    });
  }

  try {
    const response = await subscribe();

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }

    const errorBody = await response.json().catch(() => null);
    const errorText = JSON.stringify(errorBody ?? "");
    const errorCode = (errorBody as { code?: string } | null)?.code;

    // Buttondown returns 400 when the email is already subscribed; treat this as a
    // success from the visitor's perspective rather than an error.
    if (response.status === 400 && /already|exist/i.test(errorText)) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    // A previously-unsubscribed address is "suppressed" and POSTing again won't
    // reactivate it (Buttondown's suggested collision-behavior header does not
    // actually override this in practice). Explicitly PATCH the subscriber's
    // type back to "regular" instead, which is the documented way to resubscribe.
    if (response.status === 400 && errorCode === "subscriber_suppressed") {
      const subscriberId = await findSubscriberId(email);
      if (!subscriberId) {
        console.error("Buttondown resubscribe: could not find subscriber id for", email);
        return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
      }
      const patchResponse = await reactivateAsRegular(subscriberId);
      if (patchResponse.ok) {
        return NextResponse.json({ ok: true, resubscribed: true });
      }
      const patchErrorBody = await patchResponse.json().catch(() => null);
      console.error("Buttondown resubscribe PATCH failed", patchResponse.status, patchErrorBody);
      return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
    }

    // Buttondown's spam firewall can flag a legitimate visitor (often due to a
    // shared/carrier IP address with a poor reputation) and reject the request,
    // but it still records the subscriber with a "Blocked" status that the
    // account owner can review and approve from the Buttondown dashboard. Since
    // the signup was captured either way, show the visitor a normal success
    // message instead of an error.
    if (response.status === 400 && errorCode === "subscriber_blocked") {
      console.error("Buttondown flagged subscriber as blocked (needs manual review)", email);
      return NextResponse.json({ ok: true, pendingReview: true });
    }

    console.error("Buttondown subscribe failed", response.status, errorBody);
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
  } catch (error) {
    console.error("Buttondown subscribe request threw", error);
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
