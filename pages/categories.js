import { getCategories } from "../src/services/get-categories";
import CategorieGrid from "../src/components/CategorieGrid";

export function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h1>Categories</h1>

      <CategorieGrid categories={categories} />
    </div>
  );
}
