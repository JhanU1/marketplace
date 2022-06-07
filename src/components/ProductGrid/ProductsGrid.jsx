import { useEffect, useState } from "react";
import { ProductSearch } from "../ProductSearch/ProductSearch";
import { ProductCard } from "../ProductCard/ProductCard";
import { Pagination } from "../Pagination";
import { useLocation, Link } from "react-router-dom";
import styles from "./ProductsGrid.module.css";
import Navbar from "../Navbar";
import { getAllProducts, getProductsBySearch } from "../../utils/products";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [productsPerPage] = useState([10]);

  const location = useLocation();
  const search = location.search.split("=")[1];

  useEffect(() => {
    if (!search) {
      setProducts(getAllProducts());
    } else {
      console.log(search);
      setProducts(getProductsBySearch(search));
    }
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
      <Navbar />
      <header>
        <Link to="/products">
          <h1 className={styles.title}>Catalogo</h1>
        </Link>
      </header>
      <ProductSearch />
      <ul className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
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
