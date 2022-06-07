import Login from "./pages/Login";
import ProductsGrid from "./components/ProductGrid/ProductsGrid";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./pages/Register";
import Product from "./components/Product";
import { getCurrentUser } from "./utils/auth";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const isLogged = !!getCurrentUser();

  console.log(isLogged)
  return (
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
