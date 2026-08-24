import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Contact", "SLPへのお問い合わせはこちらから。", "/contact/");

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Contact" />
      <section className="contact wrap">
        <p data-reveal>SLPに関するご質問、ご感想などあれば以下よりご連絡ください。</p>
        <a className="mail" href="mailto:info@slprecordings.com" data-reveal>info@slprecordings.com</a>
        <p className="note" data-reveal>
          入力フォームは設置していません。上記のメールアドレス宛にご連絡ください。
        </p>
      </section>
    </main>
  );
}
