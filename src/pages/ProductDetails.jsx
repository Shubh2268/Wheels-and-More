import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <p>Product not found</p>
        <Link to="/products" className="text-blue-600 underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link
        to="/products"
        className="text-sm text-gray-500 mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-gray-100 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-xs uppercase text-gray-500">
            {product.brand}
          </p>
          <h1 className="text-2xl font-semibold mt-1">
            {product.name}
          </h1>

          <p className="mt-4 text-xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </p>

          <div className="mt-4 text-sm space-y-1">
            <p>
              <strong>Scale:</strong> {product.scale}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  product.availability === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {product.availability}
              </span>
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={product.availability !== "In Stock"}
            className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-900 disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
