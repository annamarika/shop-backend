import ProductCreateForm from "../src/components/ProductCreateForm";
import { getCategories } from "../src/services/get-categories";

export async function getServerSideProps() {
  const categories = await getCategories();
  return {
    props: {
      categories,
    },
  };
}

export default function CreateProduct({ categories }) {
  return (
    <div>
      <h1>test3</h1>
      <ProductCreateForm categories={categories} />
    </div>
  );
}
