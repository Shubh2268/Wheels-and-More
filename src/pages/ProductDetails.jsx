import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { formatPrice, getStockStatus } from "../utils/format";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const stock = product ? getStockStatus(product.availability) : null;

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
        <p className="text-lg font-medium">Product not found</p>
        <Link
          to="/products"
          className="inline-block mt-4 text-sm text-blue-600 underline"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <Link
        to="/products"
        className="text-xs tracking-wide text-gray-500 mb-10 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-14">
        {/* IMAGE */}
        <div className=" from-gray-50 to-gray-100 rounded-3xl p-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-contain"
          />
        </div>

        {/* INFO */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-gray-400">
            {product.brand}
          </p>

          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            {product.name}
          </h1>

          {product.description && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* PRICE */}
          <div className="mt-8 text-3xl font-semibold">
            {formatPrice(product.price)}
          </div>

          {/* META */}
          <div className="mt-6 flex gap-6 text-sm">
            <span className="px-4 py-1 rounded-full bg-gray-100">
              Scale: {product.scale}
            </span>

            <span
              className={`px-4 py-1 rounded-full bg-gray-100 ${stock.color}`}
            >
              {stock.label}
            </span>
          </div>

          {/* ACTION */}
          <button
            onClick={() => addToCart(product)}
            disabled={product.availability !== "In Stock"}
            className="mt-10 bg-black text-white px-10 py-3 rounded-full
                       hover:bg-gray-900 transition
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
