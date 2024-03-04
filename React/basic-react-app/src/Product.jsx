
import "./Product.css";

function Product(title, price) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h4>Price: {price}</h4>
    </div>
  );
}

export default Product;
