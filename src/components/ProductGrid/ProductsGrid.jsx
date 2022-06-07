import { useEffect, useState } from "react";
import { ProductSearch } from "../ProductSearch/ProductSearch";
import { ProductCard } from "../ProductCard/ProductCard";
import { Pagination } from "../Pagination";
import { useLocation, Link } from "react-router-dom";
import styles from "./ProductsGrid.module.css";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [productsPerPage] = useState([10]);

  const location = useLocation();
  const search = location.search.split("=")[1];

  useEffect(() => {
    const fetchProducts = () => {
      const searchUrl = search
        ? "https://dummyjson.com/products/search?q=" + search
        : "https://dummyjson.com/products";
      return fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    };
    fetchProducts();
  }, [search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <header>
        <Link to="/products">
          <h1 className={styles.title}>Catalogo</h1>
        </Link>
      </header>
      <ProductSearch />
      <ul className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </ul>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}
