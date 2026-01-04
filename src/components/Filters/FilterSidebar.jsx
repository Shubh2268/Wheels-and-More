export default function FilterSidebar({ filters, setFilters, onClose }) {
  const toggleCheckbox = (category, value) => {
    const existing = filters[category];

    const updated = existing.includes(value)
      ? existing.filter((item) => item !== value)
      : [...existing, value];

    setFilters({ ...filters, [category]: updated });
  };

  const clearFilters = () => {
    setFilters({ brand: [], scale: [], availability: [] });
    onClose && onClose();
  };

  return (
    <div className="space-y-8 text-sm">
      {/* BRAND */}
      <div>
        <h3 className="mb-3 text-xs tracking-widest uppercase text-gray-400">
          Brand
        </h3>

        {["Bburago", "Maisto", "Hot Wheels"].map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-3 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => toggleCheckbox("brand", brand)}
              className="accent-black"
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {/* SCALE */}
      <div>
        <h3 className="mb-3 text-xs tracking-widest uppercase text-gray-400">
          Scale
        </h3>

        {["1:18", "1:24", "1:32", "1:43"].map((scale) => (
          <label
            key={scale}
            className="flex items-center gap-3 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={filters.scale.includes(scale)}
              onChange={() => toggleCheckbox("scale", scale)}
              className="accent-black"
            />
            <span>{scale}</span>
          </label>
        ))}
      </div>

      {/* AVAILABILITY */}
      <div>
        <h3 className="mb-3 text-xs tracking-widest uppercase text-gray-400">
          Availability
        </h3>

        {["In Stock", "Out of Stock"].map((status) => (
          <label
            key={status}
            className="flex items-center gap-3 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={filters.availability.includes(status)}
              onChange={() => toggleCheckbox("availability", status)}
              className="accent-black"
            />
            <span>{status}</span>
          </label>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="pt-4 border-t">
        <button
          onClick={clearFilters}
          className="text-xs text-gray-500 hover:text-black transition cursor-pointer"
        >
          Clear all filters
        </button>

        {onClose && (
          <button
            onClick={onClose}
            className="mt-6 w-full bg-black text-white py-3 rounded-full text-sm cursor-pointer"
          >
            Apply Filters
          </button>
        )}
      </div>
    </div>
  );
}
