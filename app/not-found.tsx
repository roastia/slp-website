import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found wrap">
      <p className="section-label">not found</p>
      <h1>Page not found.</h1>
      <Link className="detail-back" href="/">← home</Link>
    </main>
  );
}
