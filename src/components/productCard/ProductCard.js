import Cart from "../Cart/Cart";
import "./productCard.css";
const ProductCard = (props) => {
  return (
    <div className="card">
      <div>{props.product.title}</div>
      <div>{props.product.price.value}</div>
      <div>
        {props.product.features.map((feature, idx) => {
          return <div key={idx}>{feature}</div>;
        })}
      </div>
      <div>
        <Cart product={props.product} />
      </div>
    </div>
  );
};
export default ProductCard;
