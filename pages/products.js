import { getProducts } from "../src/services/get-products";

export function getStaticProps() {
  const products = getProducts();

  return {
    props: {
      products,
    },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul products={products}>
        <li></li>
      </ul>
    </div>
  );
}
