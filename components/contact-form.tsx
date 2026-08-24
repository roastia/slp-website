"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://formspree.io/f/xbgrebpr";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
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

  if (status === "success") {
    return (
      <p className="form-status">
        送信しました。お問い合わせいただきありがとうございます。折り返しご連絡いたします。
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-reveal>
      <div className="field">
        <label htmlFor="contact-name">お名前</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required disabled={status === "sending"} />
      </div>
      <div className="field">
        <label htmlFor="contact-email">メールアドレス</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required disabled={status === "sending"} />
      </div>
      <div className="field">
        <label htmlFor="contact-message">お問い合わせ内容</label>
        <textarea id="contact-message" name="message" required disabled={status === "sending"} />
      </div>
      <button type="submit" className="form-submit" disabled={status === "sending"}>
        {status === "sending" ? "送信中…" : "送信する"}
      </button>
      {status === "error" ? (
        <p className="form-status is-error">
          送信に失敗しました。お手数ですが info@slprecordings.com までメールでご連絡ください。
        </p>
      ) : null}
    </form>
  );
}
