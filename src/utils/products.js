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

export const editProduct = (productId, product) => {
  const productIndex = data.products.findIndex((product) => product.id == productId);
  data.products[productIndex] = {
    ...product,
    id: +productId,
  }
  return data.products[productIndex];
}
