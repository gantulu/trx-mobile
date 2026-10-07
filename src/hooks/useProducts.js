import { useMemo } from "react";
import { getProducts, getProductById, getFeaturedProducts, searchProducts } from "../services/productService";

export function useProducts(filters = {}) {
  return useMemo(() => searchProducts(filters), [filters.query, filters.category]);
}
export function useProduct(productId) {
  return useMemo(() => getProductById(productId), [productId]);
}
export function useFeaturedProducts() {
  return useMemo(() => getFeaturedProducts(), []);
}
export function useAllProducts() {
  return useMemo(() => getProducts(), []);
}
