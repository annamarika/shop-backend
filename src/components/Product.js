import { useState } from "react";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setIsEditMode(true);
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
}) {
  return (
    <div className="product__containerall">
      <div className="product__container">
        <div className="product__h5">
          <h5>{name}</h5>
          <h5>{price}</h5>
        </div>
        <div className="product__p">
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <ul>
          <li>{tags}</li>
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
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button>Wirklich löschen</button>
      </div>
    </div>
  );
}
