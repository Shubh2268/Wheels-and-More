// Format price as ₹1,499 or ₹999
export const formatPrice = (value) => {
  if (!value) return "₹0";
  return "₹" + Number(value).toLocaleString("en-IN");
};

// Create a readable product title (Capitalized Words)
export const formatTitle = (text = "") => {
  return text
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

// Trim long descriptions
export const shortText = (text = "", limit = 80) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

// Generate random clean ID for products
export const makeId = () => {
  return "prod_" + Math.random().toString(36).substr(2, 9);
};

// Convert title into slug for cleaner URLs
export const slugify = (text = "") => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};
