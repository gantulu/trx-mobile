import { useProducts } from "../../hooks/useProducts";

export default function ProductGrid({ query = "", category = "All", onCountChange }) {
  const products = useProducts({ query, category });
  if (onCountChange) onCountChange(products.length);
  return <section className="ui-section"><h2>Products</h2><div className="ui-card-grid">{products.map((product) => <article className="ui-card" key={product.id}><strong>{product.name}</strong><span className="ui-muted">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })} · {product.rating}</span></article>)}</div></section>;
}