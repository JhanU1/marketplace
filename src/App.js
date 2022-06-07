import Login from "./pages/Login";
import ProductsGrid from "./components/ProductGrid/ProductsGrid";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./pages/Register";
import ProductForm from "./components/ProductForm";
import { getCurrentUser } from "./utils/auth";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isLogged = !!getCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/new" element={<ProductForm />} />

        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={<Navigate to={isLogged ? "/products" : "/login"} replace />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
