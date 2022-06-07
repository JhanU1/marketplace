import { useParams } from "react-router";
import { getProductById } from "../../utils/products";
import { ProductCard } from "../ProductCard/ProductCard";
import Navbar from "../Navbar";


export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);

  return (
    <div>
      <Navbar />
      <ProductCard {...product} />
    </div>
  );
}
