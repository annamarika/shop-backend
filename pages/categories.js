import { getCategories } from "../src/services/get-categories";
import CategorieGrid from "../src/components/CategorieGrid";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      fallback: { "/api/categories": categories },
    },
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <div>
        <h1>Categories</h1>

        <CategorieGrid />
      </div>
    </SWRConfig>
  );
}
