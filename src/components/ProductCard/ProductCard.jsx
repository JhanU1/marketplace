import styles from "./ProductCard.module.css"
export function ProductCard({product}){  
    return (
        <li className={styles.productCard}>
            <img className={styles.productImage} width={230} src={product.thumbnail} alt={product.title}></img>
            <div>{product.title}</div>
        </li>
    )
}