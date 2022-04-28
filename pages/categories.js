import { getCategories } from "../src/services/get-categories";

export function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function Categories() {
  return (
    <div>
      <h1>test2</h1>
    </div>
  );
}
