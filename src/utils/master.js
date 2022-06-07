import data from "./data";

export const getSellerUsers = () => {
  return data.users.filter((user) => user.type === "seller");
};

export const getProductByUserName = (username) => {
  return data.products.filter((product) => product.owner === username);
};
