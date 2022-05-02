import { getProducts } from "../src/services/get-products";
import ProductGrid from "../src/components/ProductGrid";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: { "/api/products": products },
    },
  };
}

export default function Products({ fallback }) {
  console.log(fallback);
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <div>
        <h1>Products</h1>

        <ProductGrid />
      </div>
    </SWRConfig>
  );
}
