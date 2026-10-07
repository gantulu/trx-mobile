import { useProfile } from "../../hooks/useProfile";

export default function ProfileSummary() {
  const { summary } = useProfile();
  return <section className="ui-section"><h2>Summary</h2><div className="ui-summary-grid"><span>Orders</span><strong>{summary.orders}</strong><span>Saved Items</span><strong>{summary.savedItems}</strong></div></section>;
}