import CheckoutSummary from "../../components/checkout/CheckoutSummary";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import DeliveryMethod from "../../components/checkout/DeliveryMethod";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderSummary from "../../components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="page-composition">
      <CheckoutSummary />
      <ShippingAddress />
      <DeliveryMethod />
      <PaymentMethod />
      <OrderSummary />
    </div>
  );
}
