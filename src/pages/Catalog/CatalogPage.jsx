import { useMemo, useState } from "react";
import { getCategories } from "../../services/productService";
import CatalogHeader from "../../components/catalog/CatalogHeader";
import CategoryFilter from "../../components/catalog/CategoryFilter";
import SearchBar from "../../components/catalog/SearchBar";
import ProductGrid from "../../components/catalog/ProductGrid";
import CatalogEmptyState from "../../components/catalog/CatalogEmptyState";
import { useProducts } from "../../hooks/useProducts";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => getCategories(), []);
  const products = useProducts({ query, category });

  return (
    <div className="page-composition">
      <CatalogHeader />
      <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      <SearchBar value={query} onChange={setQuery} />
      {products.length > 0 ? <ProductGrid query={query} category={category} /> : <CatalogEmptyState />}
    </div>
  );
}
