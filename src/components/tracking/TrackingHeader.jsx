import { useOrder } from "../../hooks/useOrders";

export default function TrackingHeader({ orderId }) {
  const order = useOrder(orderId);
  return <section className="ui-section"><p className="eyebrow">Order</p><h1>{order ? order.id : "Order not found"}</h1><p className="ui-muted">{order ? `Status: ${order.status}` : "No matching order."}</p></section>;
}