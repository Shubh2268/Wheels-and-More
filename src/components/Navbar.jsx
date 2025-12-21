import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";

export default function Navbar() {
  const { cart } = useCart();
  const { isAdmin, logout } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.35em] uppercase text-white"
        >
          Wheels & More
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-4 md:gap-8 text-xs uppercase tracking-widest text-gray-100">
          
          <Link
            to="/products"
            className="hover:text-white transition"
          >
            Shop
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-white transition"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 text-[10px] bg-white text-black px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {isAdmin ? (
            <>
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="hover:text-white transition"
              >
                Admin
              </button>

              <button
                onClick={logout}
                className="text-gray-400 hover:text-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition transform ease-in "
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
