import { useEffect, useState } from "react";
import { ProductSearch } from "../ProductSearch/ProductSearch";
import SellerProduct from "../../components/SelleProduct";
import { Pagination } from "../Pagination";
import { useLocation, Link } from "react-router-dom";
import styles from "./style.css";
import Navbar from "../Navbar";
import { getProductsByUserId, getSellerUsers } from "../../utils/master.js";
import { useParams } from "react-router";

export default function Page({ user_id }) {
  if (!user_id) {
     user_id  = useParams();
  }
  const [products, setProducts] = useState(getProductsByUserId(user_id));
  const [currentPage, setCurrentPage] = useState([1]);
  const [productsPerPage] = useState([10]);

  const location = useLocation();
  const search = location.search.split("=")[1];
  const filterProducts = (search) => {
    const products = getProductsByUserId(user_id);
    return products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  };
  useEffect(() => {
    if (!search) {
      setProducts(getProductsByUserId(user_id));
    } else {
      console.log(search);
      setProducts(filterProducts(search));
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
          <h1 className={styles.title}>Productos del Vendedor</h1>
        </Link>
      </header>
      <ProductSearch />
      <ul className={styles.productsGrid}>
        {currentProducts.map((product,index) => (
          <SellerProduct key={index} {...product} />
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
