import { useTrackingEvents } from "../../hooks/useOrders";

export default function TrackingTimeline() {
  const events = useTrackingEvents();
  return <section className="ui-section"><h2>Tracking Timeline</h2><ol className="ui-timeline">{events.map((event) => <li key={event.id}><strong>{event.title}</strong><span className="ui-muted">{event.description}</span></li>)}</ol></section>;
}