// ---------------- PRICE ----------------

// Format price as ₹1,499 or ₹12,999
export const formatPrice = (value = 0) => {
  const number = Number(value);
  if (!Number.isFinite(number)) return "₹0";
  return `₹${number.toLocaleString("en-IN")}`;
};

// ---------------- TEXT ----------------

// Capitalize each word (titles, names)
export const formatTitle = (text = "") => {
  if (typeof text !== "string") return "";
  return text
    .toLowerCase()
    .split(" ")
    .map(word =>
      word ? word.charAt(0).toUpperCase() + word.slice(1) : ""
    )
    .join(" ");
};

// Trim long text safely (cards, previews)
export const shortText = (text = "", limit = 80) => {
  if (typeof text !== "string") return "";
  return text.length > limit ? `${text.slice(0, limit)}…` : text;
};

// ---------------- PRODUCT UTILS ----------------

// Safe unique ID generator (with fallback)
export const makeId = (prefix = "prod") => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID().slice(0, 8)}`;
  }

  // fallback (older browsers)
  return `${prefix}_${Math.random().toString(36).substr(2, 8)}`;
};

// Create SEO-friendly URL slug
export const slugify = (text = "") => {
  if (typeof text !== "string") return "";
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

// ---------------- SORT HELPERS ----------------

// Price: Low → High
export const sortByPriceLowToHigh = (products = []) =>
  [...products].sort((a, b) => Number(a.price) - Number(b.price));

// Price: High → Low
export const sortByPriceHighToLow = (products = []) =>
  [...products].sort((a, b) => Number(b.price) - Number(a.price));
