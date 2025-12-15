import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";

export default function Navbar() {
  const { cart } = useCart();
  const { isAdmin, logout } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          WHEELS AND MORE
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/products">Shop</Link>

          <Link to="/cart" className="relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {isAdmin ? (
            <>
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="text-blue-600"
              >
                Admin
              </button>

              <button onClick={logout} className="text-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link to="/admin/login">Admin Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
