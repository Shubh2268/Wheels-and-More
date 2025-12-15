import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/Products/ProductCard";

export default function Home() {
  const { products } = useProducts();
  const featured = products;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="bg-blue-50 p-8 rounded-lg mb-10">
        <h1 className="text-3xl font-bold">Wheels and More</h1>
        <p className="mt-2 text-gray-700">
          Premium diecast cars • Collectibles • Miniatures
        </p>

        <Link
          to="/products"
          className="inline-block bg-black text-white px-5 py-2.5 rounded mt-5 text-sm hover:bg-gray-900 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <h2 className="text-lg font-semibold mb-5">Featured Cars</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
