import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ManageProducts from "./admin/ManageProducts";
import AddProduct from "./admin/AddProduct";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AdminProvider } from "./context/AdminContext";

function App() {
  return (
    <Router>
      <AdminProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              {/* ---------------- PUBLIC ROUTES ---------------- */}
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/products"
                element={
                  <>
                    <Navbar />
                    <Products />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/product/:id"
                element={
                  <>
                    <Navbar />
                    <ProductDetails />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/checkout"
                element={
                  <>
                    <Navbar />
                    <Checkout />
                    <Footer />
                  </>
                }
              />

              {/* ---------------- ADMIN ROUTES ---------------- */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<ManageProducts />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AdminProvider>
    </Router>
  );
}

export default App;
