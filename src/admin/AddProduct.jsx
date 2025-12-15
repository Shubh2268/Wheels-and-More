import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: Date.now().toString(),
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct(product);
    navigate("/admin/manage-products");
  };

  return (
    <div className="max-w-xl mx-auto p-10">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      <form onSubmit={handleAdd} className="space-y-4">
        <input
          name="title"
          className="border w-full p-2 rounded"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          name="price"
          className="border w-full p-2 rounded"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          name="image"
          className="border w-full p-2 rounded"
          placeholder="Product Image URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="border w-full p-2 rounded"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
