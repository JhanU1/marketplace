import data from "./data";

export const getProductById = (id) => {
  const product = data.products.find((product) => product.id === id);
  return product;
}
