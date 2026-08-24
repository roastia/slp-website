"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "/api/newsletter";

type Status = "idle" | "sending" | "success" | "pending" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok && data?.pendingReview) {
        // The signup was received but needs a manual review before it's actually
        // active (e.g. flagged by spam protection) — say so honestly rather than
        // claiming it's already done.
        setStatus("pending");
        form.reset();
      } else if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="footer-newsletter">
      <span className="label">Newsletter</span>
      {status === "success" ? (
        <span className="status">登録しました。ありがとうございます。</span>
      ) : status === "pending" ? (
        <span className="status">ご登録を受け付けました。確認のうえ反映いたします。</span>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            aria-label="メールアドレス"
            required
            disabled={status === "sending"}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "…" : "登録する"}
          </button>
        </form>
      )}
      {status === "error" ? (
        <span className="status is-error">登録に失敗しました。時間をおいて再度お試しください。</span>
      ) : null}
    </div>
  );
}
