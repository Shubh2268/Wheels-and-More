import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="border rounded-lg overflow-hidden hover:shadow-md transition block"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover bg-gray-100"
      />

      <div className="p-3">
        <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
        <h3 className="font-semibold mt-1 mb-1 text-sm">
          {product.name}
        </h3>
        <p className="font-bold text-blue-600">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
