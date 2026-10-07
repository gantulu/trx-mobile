import { useMemo } from "react";
import { getCartItems, getCartTotal } from "../services/cartService";

export function useCart() {
  const items = useMemo(() => getCartItems(), []);
  const total = useMemo(() => getCartTotal(items), [items]);
  return { items, total };
}
