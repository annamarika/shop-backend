export default function Categorie({ name, description, id }) {
  return (
    <div className="categorie__containerall">
      <div className="categorie__container">
        <div className="categorie__h5">
          <h5>{name}</h5>
          <h5 className="categorie__h5--single">{description}</h5>
        </div>
        <div className="product__buttons">
          <button className="product__button">Delete</button>
          <button className="product__button">Edit</button>
        </div>
      </div>
    </div>
  );
}
