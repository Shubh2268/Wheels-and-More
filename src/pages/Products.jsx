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

  const [showFilters, setShowFilters] = useState(false);

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
      {/* HEADER */}
      <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
            Curated Collection
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-medium">
            All Cars
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {filteredProducts.length} models available
          </p>
        </div>

        {/* MOBILE FILTER BUTTON */}
        <button
          onClick={() => setShowFilters(true)}
          className="lg:hidden border px-4 py-1 rounded-full text-sm hover:bg-black/80 hover:text-white cursor-pointer active:scale-90 transform ease-in"
        >
          Filters
        </button>
      </div>

      {/* LAYOUT */}
      <div className="flex gap-10">
        {/* DESKTOP FILTERS */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-medium">Filters</h2>
              <button onClick={() => setShowFilters(false)}>✕</button>
            </div>

            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
