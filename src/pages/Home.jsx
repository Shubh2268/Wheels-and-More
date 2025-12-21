import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/Products/ProductCard";
import bgVideo from '../assets/bg-video.mp4';

export default function Home() {
  const { products } = useProducts();
  const featured = products;

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 md:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-black text-white mb-20 h-[70vh] min-h-[550px]">
      
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 px-10 py-20 max-w-5xl">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-300">
          Collector Edition
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
          Diecast Cars <br /> Crafted for Collectors
        </h1>

        <p className="mt-6 text-gray-200 max-w-md">
          Premium scale models featuring iconic supercars and timeless designs.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link
            to="/products"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition text-center"
          >
            Explore Collection
          </Link>

          <Link
            to="/products"
            className="border border-white/40 px-8 py-3 rounded-full hover:bg-white/10 transition text-center"
          >
            View All
          </Link>
        </div>
      </div>
    </section>



      {/* Featured Products */}
      <h2 className="text-lg font-semibold mb-5 text-center md:text-left">Featured Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
