import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import FilterSidebar from "../components/Filters/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";

export default function Products() {
  const { products } = useProducts();

  const [filters, setFilters] = useState({
    brand: [],
    scale: [],
    availability: [],
  });

  const filterLogic = (product) => {
    if (filters.brand.length && !filters.brand.includes(product.brand))
      return false;

    if (filters.scale.length && !filters.scale.includes(product.scale))
      return false;

    if (
      filters.availability.length &&
      !filters.availability.includes(product.availability)
    )
      return false;

    return true;
  };

  const filteredProducts = products.filter(filterLogic);

  return (
    <div className="flex">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div className="flex-1">
        <h1 className="text-xl font-semibold p-4 border-b">
          All Toy Cars ({filteredProducts.length})
        </h1>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
