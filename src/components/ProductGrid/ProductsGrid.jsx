import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useLocation } from "react-router-dom";
import styles from "./ProductsGrid.module.css";
import Navbar from "../Navbar";
import { getAllProducts, getProductsBySearch } from "../../utils/products";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
      setProducts(getProductsBySearch(search));
    }
  }, [search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <ul className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
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
