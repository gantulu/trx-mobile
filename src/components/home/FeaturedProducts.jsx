import { useFeaturedProducts } from "../../hooks/useProducts";

export default function FeaturedProducts() {
  const products = useFeaturedProducts();
  return <section className="ui-section"><h2>Featured Products</h2><div className="ui-card-grid">{products.map((product) => <article className="ui-card" key={product.id}><strong>{product.name}</strong><span className="ui-muted">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</span></article>)}</div></section>;
}