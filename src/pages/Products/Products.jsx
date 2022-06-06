import ProductsGrid from "../../components/ProductGrid/ProductsGrid";
import styles from "./Products.module.css"

export default function Products (){
  return (
    <div>
      <header>
          <h1 className={styles.title}>
              Catalogo
          </h1>
      </header>
      <main>
        <ProductsGrid />
      </main>
    </div>
  )
}