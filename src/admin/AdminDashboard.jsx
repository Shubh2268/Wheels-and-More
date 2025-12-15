import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { logout } = useContext(AdminContext);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="space-y-6">

        <Link
          to="/admin/add-product"
          className="block bg-green-600 text-white p-4 rounded text-center"
        >
          Add New Product
        </Link>

        <Link
          to="/admin/manage-products"
          className="block bg-blue-600 text-white p-4 rounded text-center"
        >
          Manage Products
        </Link>

        <button
          onClick={logout}
          className="block w-full mt-6 bg-red-600 text-white p-3 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminDashboard;
