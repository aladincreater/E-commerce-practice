import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    if (cartItems[item.id]) {
      setCartItems((prev) => ({
        ...prev,
        [item.id]: { ...prev[item.id], quantity: prev[item.id].quantity + 1 },
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [item.id]: { title: item.title, id: item.id, quantity: 1 },
      }));
    }
  };

  const removeCartItem = (item) => {
    const updatedCart = {...cartItems};
    delete updatedCart[item.id];
    setCartItems(updatedCart);
  };

  //yeh useEffect sirf tere understanding ko dala
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
