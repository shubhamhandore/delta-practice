import Product from "./Product.jsx";

function ProductTab() {
  let options = ["Hi-Tech", "Durable", "Fast"];
  return (
    <>
      <Product title="Phone" price={30000} features={options} />
      <Product title="Tablet" price={20000} />
      <Product title="Pen" price={100} />
    </>
  );
}



export default ProductTab;
