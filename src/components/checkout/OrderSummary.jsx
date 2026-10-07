import { useCart } from "../../hooks/useCart";

export default function OrderSummary() {
  const { total } = useCart();
  return <section className="ui-section"><h2>Order Summary</h2><div className="ui-summary-row"><span>Total</span><strong>{total.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</strong></div></section>;
}