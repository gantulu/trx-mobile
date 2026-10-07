import { useOrder } from "../../hooks/useOrders";

export default function OrderStatus({ orderId }) {
  const order = useOrder(orderId);
  return <section className="ui-status"><strong>Order status</strong><span>{order?.status ?? "Not found"}</span></section>;
}