import {useContext} from "react";
import CartContext from "../../context/Cartcontext";
const AddToCart = (props) =>{
    const {cart,increaseQuantity,decreaseQuantity} = useContext(CartContext);
    const increased = () =>{
        increaseQuantity();
        console.log(cart);
    }
    const decreased = () =>{
        decreaseQuantity(props.product);
        console.log(cart);
    }
    return (<div>
        <button onClick={increased}>Add to Cart</button>
        <button onClick={decreased}>Delete</button>
    </div>)
    
}

export default AddToCart;