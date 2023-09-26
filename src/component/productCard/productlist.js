import AddToCart from "../addToCart/addToCart";
import "./productCard.css";
const ProductList = (props) => {
  return (
    <div className="card">
      <div>{props.product.title}</div>
      <div>{props.product.price.value}</div>
      <div>{
      
        props.product.features.map(
            (feature,idx)=>{
                return(
                    <div key={idx}>
                        {feature}
                    </div>
                )
            }
        )
      
      }</div>
      <div>
        <AddToCart cart={props.cart} product={props.product}/>
      </div>
    </div>
  );
};
export default ProductList;
