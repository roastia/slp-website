"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://formspree.io/f/moeazzdw";

type Status = "idle" | "sending" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
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
