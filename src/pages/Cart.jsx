import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0)
    return <h2 className="text-center py-20">Your cart is empty</h2>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-4 items-center"
        >
          <div className="flex gap-4">
            <img src={item.image} className="w-20 h-20 rounded" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>₹{item.price}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">
        Total: ₹{totalPrice}
      </h2>

      <Link
        to="/checkout"
        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
