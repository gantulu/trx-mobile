import { useProduct } from "../../hooks/useProducts";

export default function ProductDescription({ productId }) {
  const product = useProduct(productId);
  return <section className="ui-section"><h2>Description</h2><p className="ui-muted">{product?.description ?? "Product not found."}</p></section>;
}