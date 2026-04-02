const BASE_URL = "https://world.openfoodfacts.org";

// Products
export const fetchProducts = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/products.json?page=${page}`);
  return res.json();
};

// Search
export const searchProducts = async (query) => {
  const res = await fetch(
    `${BASE_URL}/cgi/search.pl?search_terms=${query}&json=true`
  );
  return res.json();
};

// Barcode
export const fetchByBarcode = async (barcode) => {
  const res = await fetch(
    `${BASE_URL}/api/v0/product/${barcode}.json`
  );
  return res.json();
};

// Category products
export const fetchByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/category/${category}.json`);
  return res.json();
};

// 🔥 Fetch categories dynamically
export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.json`);
  return res.json();
};
