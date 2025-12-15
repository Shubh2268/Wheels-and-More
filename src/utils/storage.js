// Save products to localStorage
export const saveLocalProducts = (products) => {
  localStorage.setItem("toy_products", JSON.stringify(products));
};

// Load products from localStorage
export const getLocalProducts = () => {
  return JSON.parse(localStorage.getItem("toy_products")) || [];
};
