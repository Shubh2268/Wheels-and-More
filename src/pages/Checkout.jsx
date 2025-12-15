const Checkout = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <form className="space-y-4">
        <input className="border p-2 w-full" placeholder="Full Name" />
        <input className="border p-2 w-full" placeholder="Address" />
        <input className="border p-2 w-full" placeholder="Phone Number" />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
