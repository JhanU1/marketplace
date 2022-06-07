import data from "./data";

export const getSellerUsers = () => {
  return data.users.filter((user) => user.type === "seller");
};

export const getProductsByUserId = (id) => {
  return data.products.filter((product) => product.userId == id);
};

export const getProductById = (id) => {
  return data.products.find((product) => `${product.id}` === id);
};
