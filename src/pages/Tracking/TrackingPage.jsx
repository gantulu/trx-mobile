import TrackingHeader from "../../components/tracking/TrackingHeader";
import OrderStatus from "../../components/tracking/OrderStatus";
import TrackingTimeline from "../../components/tracking/TrackingTimeline";
import DeliveryInformation from "../../components/tracking/DeliveryInformation";
import OrderItems from "../../components/tracking/OrderItems";

export default function TrackingPage() {
  return (
    <div className="page-composition">
      <TrackingHeader />
      <OrderStatus />
      <TrackingTimeline />
      <DeliveryInformation />
      <OrderItems />
    </div>
  );
}
