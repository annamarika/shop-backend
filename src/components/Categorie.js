export default function Categorie({ name, description, id }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
