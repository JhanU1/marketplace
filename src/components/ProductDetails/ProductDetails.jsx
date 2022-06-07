import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProductById } from "../../utils/products";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);

  return (
    <div>
      <ProductCard {...product} />
    </div>
  );
}
