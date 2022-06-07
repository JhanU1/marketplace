import { getCurrentUser } from '../../utils/auth';
import { getCart } from '../../utils/carts';
import { getProductById } from '../../utils/products';
import Navbar from '../Navbar';
export default function Cart() {
  const user = getCurrentUser();
  const cart = getCart(user.id);
  const products = cart.products.map(productCart => ({...productCart, ...getProductById(productCart.id)}));


  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      <div>
        {products.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
