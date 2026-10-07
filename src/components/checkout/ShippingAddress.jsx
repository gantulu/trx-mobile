import { addresses } from "../../data/mockData";

export default function ShippingAddress() {
  const address = addresses[0];
  return <section className="ui-section"><h2>Shipping Address</h2><div className="ui-card"><strong>{address.name}</strong><span>{address.phone}</span><span>{address.address}, {address.city} {address.postalCode}</span></div></section>;
}