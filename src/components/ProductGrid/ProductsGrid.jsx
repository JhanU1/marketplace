import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductsGrid.module.css"

export default function ProductsGrid() {

    const [ products, setProducts] = useState([])

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
            
    return (
        <ul className={styles.productsGrid}>
            {products.map((product) => <ProductCard key={product.title} product={product} />)}
        </ul>
    )
}