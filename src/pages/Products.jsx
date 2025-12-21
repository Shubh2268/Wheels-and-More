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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* PAGE HEADER */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
          Curated Collection
        </p>
        <h1 className="mt-3 text-2xl sm:text-3xl font-medium text-white">
          All Cars
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          {filteredProducts.length} models available
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* FILTER SIDEBAR */}
        <aside className="lg:w-72 shrink-0">
          <div className="sticky top-24">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
