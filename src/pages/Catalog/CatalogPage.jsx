import CatalogHeader from "../../components/catalog/CatalogHeader";
import CategoryFilter from "../../components/catalog/CategoryFilter";
import SearchBar from "../../components/catalog/SearchBar";
import ProductGrid from "../../components/catalog/ProductGrid";
import CatalogEmptyState from "../../components/catalog/CatalogEmptyState";

export default function CatalogPage() {
  return (
    <div className="page-composition">
      <CatalogHeader />
      <CategoryFilter />
      <SearchBar />
      <ProductGrid />
      <CatalogEmptyState />
    </div>
  );
}
