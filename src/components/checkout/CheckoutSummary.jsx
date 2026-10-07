import { useCart } from "../../hooks/useCart";

export default function CheckoutSummary() {
  const { items, total } = useCart();
  return <section className="ui-section"><h1>Checkout Summary</h1><p>{items.length} item(s)</p><strong>{total.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</strong></section>;
}