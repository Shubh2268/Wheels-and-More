import { createContext, useContext, useEffect, useState } from "react";
import { getLocalProducts, saveLocalProducts } from "../utils/storage";
import { productsData } from "../data/Products"; // local images data

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load products (localStorage → fallback to local assets)
  useEffect(() => {
    const stored = getLocalProducts();

    if (stored && stored.length > 0) {
      setProducts(stored);
    } else {
      setProducts(productsData); // load local images once
      saveLocalProducts(productsData);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (products.length > 0) {
      saveLocalProducts(products);
    }
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook
export const useProducts = () => useContext(ProductContext);
