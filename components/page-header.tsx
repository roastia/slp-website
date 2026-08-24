export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <section className="page-header wrap">
      <h1 data-reveal>{title}</h1>
      {description ? <p data-reveal>{description}</p> : null}
    </section>
  );
}
