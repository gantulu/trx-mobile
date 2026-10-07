import { products } from "../data/mockData";

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.slice(0, 2);
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId) ?? null;
}

export function getCategories() {
  return ["All", ...new Set(products.map((product) => product.category))];
}

export function searchProducts({ query = "", category = "All" } = {}) {
  const normalizedQuery = query.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesQuery =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
}
