const API_URL = "https://dummyjson.com";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/products/category-list`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};