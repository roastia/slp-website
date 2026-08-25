import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Contact", "SLPへのお問い合わせはこちらから。", "/contact/");

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Contact" />
      <section className="contact wrap">
        <ContactForm />
      </section>
    </main>
  );
}
