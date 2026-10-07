import { Link, Route, Routes } from "react-router";

function FoundationPage() {
  return (
    <main className="foundation-page">
      <section className="foundation-card">
        <p className="eyebrow">TRX Mobile</p>
        <h1>Foundation ready</h1>
        <p>
          Phase 1 establishes the React, Vite, routing, and global styling
          foundation. UI shells and application pages are implemented in later
          phases according to blueprint.json.
        </p>
        <nav className="foundation-nav" aria-label="Foundation navigation">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="foundation-page">
      <section className="foundation-card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <Link to="/">Back to Home</Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FoundationPage />} />
      <Route path="/catalog" element={<FoundationPage />} />
      <Route path="/profile" element={<FoundationPage />} />
      <Route path="/product/:productId" element={<FoundationPage />} />
      <Route path="/checkout" element={<FoundationPage />} />
      <Route path="/tracking/:orderId" element={<FoundationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
