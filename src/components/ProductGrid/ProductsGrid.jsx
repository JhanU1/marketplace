import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard"
import { Pagination } from "../Pagination"
import styles from "./ProductsGrid.module.css"

export default function ProductsGrid() {

    const [ products, setProducts] = useState([])
    const [ currentPage, setCurrentPage ] = useState([1])
    const [ productsPerPage] = useState([10])

    useEffect(() => {
        const fetchProducts = () => {
            return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data.products)
        })
    }
    fetchProducts()
    }, [])
            
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <ul className={styles.productsGrid}>
                {currentProducts.map((product) => <ProductCard key={product.title} product={product} />)}
            </ul>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        </div>
    )
}