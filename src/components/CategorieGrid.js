import Categorie from "./Categorie";
import useSWR from "swr";

export default function CategorieGrid() {
  const { data, error } = useSWR("/api/categories");
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <ul className="categories__ul">
      {data.map((categorie) => (
        <li key={categorie.id}>
          <Categorie
            id={categorie.id}
            name={categorie.name}
            description={categorie.description}
          />
        </li>
      ))}
    </ul>
  );
}
