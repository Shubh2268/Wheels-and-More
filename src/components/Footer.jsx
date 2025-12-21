export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-700">
          
          {/* REACH OUT */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-widest uppercase text-gray-900">
              Reach Out To Us
            </h4>

            <p className="font-medium text-gray-900 mb-3">Address</p>
            <p className="leading-relaxed">
              Wheels and More<br />
              41 Industrial Estate,<br />
              Delhi, India
            </p>

            <p className="mt-6">
              Phone: <span className="text-gray-900">+91 9XXXXXXXXX</span>
            </p>

            <p className="mt-2">
              Email:{" "}
              <span className="text-gray-900">
                support@wheelsandmore.in
              </span>
            </p>
            
            <p className="mt-6">
              Owner: <span className="text-gray-900">Rahul Sharma</span>
            </p>
          </div>

          {/* HELPFUL LINKS */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-widest uppercase text-gray-900">
              Helpful Links
            </h4>

            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Shipping & Returns",
                "Terms of Service",
                "Privacy Policy",
                "Refund Policy",
                "Store Locator",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-widest uppercase text-gray-900">
              Newsletter
            </h4>

            <p className="mb-6 text-gray-600">
              Sign up to receive exclusive offers and updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full border border-gray-300 px-4 py-3 mb-4 focus:outline-none focus:border-gray-900 rounded"
            />

            <button className="w-full bg-black text-white py-3 tracking-widest text-xs hover:bg-gray-800 transition rounded">
              SUBSCRIBE
            </button>
          </div>

          {/* TOP COLLECTIONS */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-widest uppercase text-gray-900">
              Top Collections
            </h4>

            <ul className="space-y-3">
              {[
                "Official Die Cast",
                "Limited Editions",
                "Collector Series",
                "Shop By Category",
                "Home & Lifestyle",
                "Accessories",
                "Clearance Sale",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-gray-200 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Wheels and More. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
