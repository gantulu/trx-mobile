export const products = [
  { id: "p-001", name: "TRX Essential", description: "Essential product for everyday use.", image: "", price: 129000, category: "Featured", rating: 4.8 },
  { id: "p-002", name: "TRX Premium", description: "Premium product with extended features.", image: "", price: 249000, category: "Premium", rating: 4.9 },
  { id: "p-003", name: "TRX Daily", description: "Practical daily-use product.", image: "", price: 99000, category: "Daily", rating: 4.6 }
];

export const addresses = [
  { id: "addr-001", name: "Gantulu", phone: "+62 812 0000 0000", address: "Primary address", city: "Makassar", postalCode: "90000" }
];

export const orders = [
  {
    id: "ord-001",
    items: [{ productId: "p-001", quantity: 1, price: 129000, options: [] }],
    address: addresses[0],
    deliveryMethod: "Standard Delivery",
    paymentMethod: "Payment Method",
    total: 129000,
    status: "processing"
  }
];

export const trackingEvents = [
  { id: "evt-001", status: "completed", title: "Order placed", description: "Order received.", timestamp: "2026-10-07T09:00:00Z" },
  { id: "evt-002", status: "current", title: "Processing", description: "Order is being prepared.", timestamp: "2026-10-07T10:00:00Z" },
  { id: "evt-003", status: "pending", title: "Delivered", description: "Delivery is pending.", timestamp: null }
];

export const profile = {
  name: "Gantulu",
  meta: "TRX Mobile member",
  summary: { orders: 1, savedItems: 0 }
};
