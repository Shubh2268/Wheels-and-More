// ---------------- PRICE ----------------

// Format price as ₹1,499 or ₹12,999
export const formatPrice = (value = 0) => {
  const number = Number(value);
  if (Number.isNaN(number)) return "₹0";
  return `₹${number.toLocaleString("en-IN")}`;
};

// ---------------- TEXT ----------------

// Capitalize each word (for titles, names)
export const formatTitle = (text = "") => {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Trim long text safely (cards, previews)
export const shortText = (text = "", limit = 80) => {
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit)}…` : text;
};

// ---------------- PRODUCT UTILS ----------------

// Generate clean unique product ID
export const makeId = (prefix = "prod") => {
  return `${prefix}_${crypto.randomUUID().slice(0, 8)}`;
};

// Create SEO-friendly URL slug
export const slugify = (text = "") => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};

// ---------------- UI HELPERS ----------------

// Stock badge helper
export const getStockStatus = (availability = "") => {
  return availability.toLowerCase() === "in stock"
    ? { label: "In Stock", color: "text-green-600" }
    : { label: "Out of Stock", color: "text-red-500" };
};

// Sort helpers (for future use)
export const sortByPriceLowToHigh = (products = []) =>
  [...products].sort((a, b) => a.price - b.price);

export const sortByPriceHighToLow = (products = []) =>
  [...products].sort((a, b) => b.price - a.price);
