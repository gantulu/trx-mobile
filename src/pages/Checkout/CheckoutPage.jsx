export default function CheckoutPage() {
  return (
    <div className="page-composition">
      <section data-blueprint-component="CheckoutSummary"><h1>Checkout Summary</h1></section>
      <section data-blueprint-component="ShippingAddress"><h2>Shipping Address</h2></section>
      <section data-blueprint-component="DeliveryMethod"><h2>Delivery Method</h2></section>
      <section data-blueprint-component="PaymentMethod"><h2>Payment Method</h2></section>
      <section data-blueprint-component="OrderSummary"><h2>Order Summary</h2></section>
    </div>
  );
}
