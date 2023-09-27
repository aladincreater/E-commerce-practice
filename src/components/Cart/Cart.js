import { useContext } from "react";
import CartContext from "../../context/Cartcontext";
const Cart = (props) => {
  const { addToCart, removeCartItem } = useContext(CartContext);
  const addCartItem = () => {
    addToCart(props.product);
  };
  const deleteCartItem = () => {
    removeCartItem(props.product);
  };
  return (
    <div>
      <button onClick={addCartItem}>Add to Cart</button>
      <button onClick={deleteCartItem}>Delete</button>
    </div>
  );
};

export default Cart;
