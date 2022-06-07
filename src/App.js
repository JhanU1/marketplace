import Login from "./pages/Login";
import ProductsGrid from "./components/ProductGrid/ProductsGrid";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/products">
          <h1 className={styles.title}>Catalogo</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
