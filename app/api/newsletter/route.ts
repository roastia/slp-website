import { NextResponse } from "next/server";

const BUTTONDOWN_ENDPOINT = "https://api.buttondown.com/v1/subscribers";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

  try {
    const response = await fetch(BUTTONDOWN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, tags: ["website"] }),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }

    const errorBody = await response.json().catch(() => null);
    const errorText = JSON.stringify(errorBody ?? "");

    // Buttondown returns 400 when the email is already subscribed; treat this as a
    // success from the visitor's perspective rather than an error.
    if (response.status === 400 && /already|exist/i.test(errorText)) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    console.error("Buttondown subscribe failed", response.status, errorBody);
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
  } catch (error) {
    console.error("Buttondown subscribe request threw", error);
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
