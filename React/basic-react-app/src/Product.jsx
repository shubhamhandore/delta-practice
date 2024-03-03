import "./Product.css";

function Product({ title, price, feature }) {
  // const list = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      <p>{features.map((feature) => <li>{feature}</li>)}</p>
    </div>
  );
}

export default Product;
