import { authReducer } from './auth/reducers';
import { cartReducer } from './cart/reducers';

export default ({ auth, cart }, action) => ({
  auth: authReducer(auth, action),
  cart: cartReducer(cart, action)
});