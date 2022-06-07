import { useEffect, useState } from "react";
import SellerProduct from "../../components/SelleProduct";
import { useLocation, Link } from "react-router-dom";
import styles from "./ProductsGrid.module.css";
import Navbar from "../../components/Navbar";
import { getProductsByUserId, getSellerUsers } from "../../utils/master.js";
import { useParams } from "react-router";
import { Pagination,Stack } from "@mui/material";
import Box from "@mui/material/Box";



export default function Page() {

     const {user_id}  = useParams();
  
  const [products, setProducts] = useState(getProductsByUserId(user_id));
  const [currentPage, setCurrentPage] = useState([1]);
  const [productsPerPage] = useState([10]);
console.log(products);
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
      <ul className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <SellerProduct key={product.id} {...product} />
        ))}
      </ul>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={2}>
         <Pagination count={Math.ceil(products.length/productsPerPage)} variant="outlined" shape="rounded" page={currentPage} onChange={paginate}/>
        </Stack>
      </Box>
    </div>
  );
}
