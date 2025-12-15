import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("toy_cart")) || [];
    setCart(saved);
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("toy_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const updated = [...cart, product];
    setCart(updated);
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ You NEED this export for Navbar!
export const useCart = () => useContext(CartContext);
