import "../../css/products.css";
import { productsData } from "../productsData";
import { Product } from "./product";
export const Products = () => {
  return (
    <div>
      <div className="products-container">
        {productsData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
