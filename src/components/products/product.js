import "../../css/products.css";
export const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h1 className="product-brand">{product.brand}</h1>
      <p>{product.name}</p>
      <img src={product.image} alt={product.image} />
      <div className="bobbles-container">
        <p>Rating of bike:</p>
        <p>5.4</p>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
        <div className="bobble"></div>
      </div>
      <div className="prices">
        <p className="price">${product.price}</p>
        <p className="price-before">
          <strike>${product.price}</strike>
        </p>
      </div>
    </div>
  );
};
