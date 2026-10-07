import { useOrders } from "../../hooks/useOrders";

export default function RecentActivity() {
  const orders = useOrders();
  return <section className="ui-section"><h2>Recent Activity</h2><div className="ui-card">{orders[0] ? <><strong>Order {orders[0].id}</strong><span className="ui-muted">Status: {orders[0].status}</span></> : <span className="ui-muted">No recent activity.</span>}</div></section>;
}