import { useState } from "react";

export default function FilterSidebar({ filters, setFilters }) {
  const toggleCheckbox = (category, value) => {
    const existing = filters[category];

    const updated =
      existing.includes(value)
        ? existing.filter((item) => item !== value)
        : [...existing, value];

    setFilters({ ...filters, [category]: updated });
  };

  return (
    <aside className="w-64 border-r p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* BRAND */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Brand</h3>
        {["Bburago", "Maisto", "Hot Wheels"].map((brand) => (
          <label key={brand} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => toggleCheckbox("brand", brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* SCALE */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Scale Size</h3>
        {["1:18", "1:24", "1:32", "1:43"].map((scale) => (
          <label key={scale} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.scale.includes(scale)}
              onChange={() => toggleCheckbox("scale", scale)}
            />
            {scale}
          </label>
        ))}
      </div>

      {/* AVAILABILITY */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Availability</h3>
        {["In Stock", "Out of Stock"].map((item) => (
          <label key={item} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.availability.includes(item)}
              onChange={() => toggleCheckbox("availability", item)}
            />
            {item}
          </label>
        ))}
      </div>

      {/* CLEAR FILTERS */}
      <button
        onClick={() =>
          setFilters({ brand: [], scale: [], availability: [] })
        }
        className="mt-4 text-sm text-red-500 underline"
      >
        Clear All Filters
      </button>
    </aside>
  );
}
