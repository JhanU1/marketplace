import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css"

export default function ProductDetails(){
    const { productId } = useParams()
    const [ product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = () => {
            return fetch('https://dummyjson.com/products/'+ productId )
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }
    fetchProduct()
    }, [productId])

    if(!product) {
        return null
    }

    return(
        <div>
            <Link to="/products">
                <h1 className={styles.title}>
                    Catalogo
                </h1>
            </Link>
            <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.productImage}`} width={230} height={200} src={product.thumbnail} alt={product.title}></img>
                <div className={`${styles.col} ${styles.ProductDetails}`}>
                    <div>
                        {"$" + product.price}
                    </div>
                    <div>
                        {"Rating: " + product.rating}
                    </div>
                </div>
        </div>
        </div>

    )
}