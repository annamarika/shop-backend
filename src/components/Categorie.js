import { useSWRConfig } from "swr";

export default function Categorie({ name, description, id }) {
  const { mutate } = useSWRConfig();
  return (
    <div className="categorie__containerall">
      <div className="categorie__container">
        <div className="categorie__h5">
          <h5>{name}</h5>
          <h5 className="categorie__h5--single">{description}</h5>
        </div>
        <div className="product__buttons">
          <button
            className="product__button"
            onClick={async () => {
              const response = await fetch("/api/category/" + id, {
                method: "DELETE",
              });
              console.log(await response.json());
              mutate("/api/categories");
            }}
          >
            Delete
          </button>
          <button className="product__button">Edit</button>
        </div>
      </div>
    </div>
  );
}
