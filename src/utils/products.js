import data from "./data";

export const getProductById = (id) => {
  const product = data.products.find((product) => product.id == id);
  return product;
}

export const saveProduct = (product) => {
  const newProduct = {
    ...product,
    id: data.products.length + 1,
  };
  data.products.push(newProduct);
  return newProduct;
}

export const getAllProducts = () => {
  return data.products;
}

export const getProductsBySearch = (search) => {
  return getAllProducts().filter((product) => product.name.includes(search))
}
