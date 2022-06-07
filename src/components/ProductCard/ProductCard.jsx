import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css"

export function ProductCard({product}){  
    return (
        <li className={styles.productCard}>
            <Link to={"/products/" + product.id}>
                <img className={styles.productImage} width={230} height={200} src={product.thumbnail} alt={product.title}></img>
                <hr></hr>
                <div className={styles.productDetails}>
                    <div>
                        {"$" + product.price}
                    </div>
                    <div>
                        {"Rating: " + product.rating}
                    </div>
                </div>
            </Link>
        </li>
    )
}