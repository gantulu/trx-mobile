import { useProduct } from "../../hooks/useProducts";

export default function ProductInfo({ productId }) {
  const product = useProduct(productId);
  if (!product) return <section className="ui-empty"><h1>Product not found</h1></section>;
  return <section className="ui-section"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</p><p className="ui-muted">Rating {product.rating}</p></section>;
}