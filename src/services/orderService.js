import { orders, trackingEvents } from "../data/mockData";

export function getOrders() {
  return orders;
}

export function getOrderById(orderId) {
  return orders.find((order) => order.id === orderId) ?? null;
}

export function getTrackingEvents() {
  return trackingEvents;
}
