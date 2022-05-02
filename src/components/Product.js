import { useState } from "react";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setDeleteMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </div>
  );
}

function ProductModeShow({
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
  id,
}) {
  return (
    <div className="product__containerall">
      <div className="product__container">
        <div className="product__h5">
          <h3>{name}</h3>
          <h3>{price}€</h3>
        </div>
        <div className="product__p">
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <ul className="product__tags">
          {tags.map((tag) => {
            return (
              <li className="product__tag" key={id}>
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="product__buttons">
          <button className="product__button" onClick={onEnableDeleteMode}>
            Delete
          </button>
          <button className="product__button">Edit</button>
        </div>
      </div>
    </div>
  );
}

function ProductModeEdit({
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
  id,
}) {
  return (
    <div className="product__containerall">
      <div className="product__container">
        <div className="product__h5">
          <h3>{name}</h3>
          <h3>{price}€</h3>
        </div>
        <div className="product__p">
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <ul className="product__tags">
          {tags.map((tag) => {
            return (
              <li className="product__tag" key={id}>
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="product__buttons">
          <button className="product__button" onClick={onDisableDeleteMode}>
            Abbrechen
          </button>
          <button className="product__button">Wirklich löschen</button>
        </div>
      </div>
    </div>
  );
}
