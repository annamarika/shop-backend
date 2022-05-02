import Product from "./Product";
import useSWR from "swr";

export default function ProductGrid() {
  const { data, error } = useSWR("/api/products");
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <ul className="products__ul">
      {data.map((product) => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            tags={product.tags}
            id={product.id}
          />
        </li>
      ))}
    </ul>
  );
}
