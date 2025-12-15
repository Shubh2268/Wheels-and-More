import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const ManageProducts = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [confirmId, setConfirmId] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-8">Manage Products</h2>

      {products.length === 0 && (
        <p className="text-center">No products found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="border rounded p-4 shadow flex flex-col"
          >
            <img
              src={prod.image}
              className="h-40 object-cover rounded mb-4"
            />

            <h3 className="font-semibold text-lg">{prod.title}</h3>
            <p className="text-gray-600">₹{prod.price}</p>

            <div className="mt-4 flex gap-4">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
                Edit
              </button>

              <button
                onClick={() => deleteProduct(prod.id)}
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
