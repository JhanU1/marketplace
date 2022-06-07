import { getCurrentUser } from '../../utils/auth';
import { getCart } from '../../utils/carts';
import { getProductById } from '../../utils/products';
import Navbar from '../Navbar';
import { ProductCard } from "../ProductCard/ProductCard";
import { Button } from '@mui/material';

export default function Cart() {
  const user = getCurrentUser();
  const cart = getCart(user.id);
  const products = cart.products.map(productCart => ({...getProductById(productCart.id), ...productCart}));
  const cartTotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );


  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      <hr />
      <div>
        {products.map(item => (
          <div key={item.id}>
            <ProductCard {...item} showAddToCart={false} showOwner={false} />
            <hr />
          </div>
        ))}
      </div>
      {/* show total */}
      <h3>Total: ${cartTotal}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert('Pago realizado')}
      >
        Pagar
      </Button>
    </div>
  );
}
