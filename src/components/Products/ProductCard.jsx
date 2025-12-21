import { Link } from "react-router-dom";
import {
  formatPrice,
  shortText,
  getStockStatus,
} from "../../utils/format";

export default function ProductCard({ product }) {
  const stock = getStockStatus(product.availability);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden 
                 border border-gray-100 
                 hover:border-gray-200
                 transition-all duration-500
                 hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative h-64  from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-6 
                     transition-transform duration-700 
                     group-hover:scale-110"
        />

        {/* Stock Badge */}
        <span
          className={`absolute top-4 left-4 text-[11px] px-3 py-1 rounded-full 
                      bg-white/90 backdrop-blur
                      ${stock.color}`}
        >
          {stock.label}
        </span>

        {/* Scale Badge */}
        <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-full bg-black text-white">
          {product.scale}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
          {product.brand}
        </p>

        <h3 className="mt-2 text-sm font-medium leading-snug text-gray-900">
          {product.name}
        </h3>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>


        {/* Description */}
        {product.description && (
          <p className="mt-2 text-xs text-gray-500 leading-relaxed">
            {shortText(product.description, 70)}
          </p>
        )}

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-semibold tracking-tight text-gray-900">
            {formatPrice(product.price)}
          </p>

          <span className="text-xs text-gray-400 group-hover:text-gray-600 transition">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
