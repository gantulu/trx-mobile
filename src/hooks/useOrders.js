import { useMemo } from "react";
import { getOrderById, getOrders, getTrackingEvents } from "../services/orderService";

export function useOrders() {
  return useMemo(() => getOrders(), []);
}
export function useOrder(orderId) {
  return useMemo(() => getOrderById(orderId), [orderId]);
}
export function useTrackingEvents() {
  return useMemo(() => getTrackingEvents(), []);
}
