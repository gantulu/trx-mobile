export default function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-page" aria-labelledby="page-title">
      <p className="eyebrow">TRX Mobile</p>
      <h1 id="page-title">{title}</h1>
      <p>{description}</p>
    </section>
  );
}
