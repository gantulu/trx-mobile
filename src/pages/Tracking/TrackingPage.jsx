import { useParams } from "react-router";
import TrackingHeader from "../../components/tracking/TrackingHeader";
import OrderStatus from "../../components/tracking/OrderStatus";
import TrackingTimeline from "../../components/tracking/TrackingTimeline";
import DeliveryInformation from "../../components/tracking/DeliveryInformation";
import OrderItems from "../../components/tracking/OrderItems";

export default function TrackingPage() {
  const { orderId } = useParams();
  return <div className="page-composition"><TrackingHeader orderId={orderId} /><OrderStatus orderId={orderId} /><TrackingTimeline /><DeliveryInformation /><OrderItems /></div>;
}
