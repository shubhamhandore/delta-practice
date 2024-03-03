import Product from "./Product.jsx";

function ProductTab() {
  let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
  return (
    <>
      <Product title="Phone" price={30000} features={options} />
      <Product title="Tablet" price={20000} />
      <Product title="Pen" price={100} />
    </>
  );
}

export default ProductTab;
