import { useState } from "react";
import "./App.css";
import Product from "./component/product/product";
import CartContext from "./context/Cartcontext";

function App() {
  const [cart,setCart] = useState({title:"rihsi"});
  console.log(cart);
  const increaseQuantity = () =>{
    setCart(cart);
  }
  const decreaseQuantity = (props) =>{
    setCart(props.product);
  }
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
      <div className="App">
        <Product />
      </div>
    </CartContext.Provider>
  );
}

export default App;
