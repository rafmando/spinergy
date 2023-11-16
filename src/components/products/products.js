import "../../css/products.css";
import "../../css/product-filter.css";
import { ProductFilter } from "../product-filter";
import { productsData } from "../productsData";
import { BsFilterRight } from "react-icons/bs";
import { useState } from "react";
import { Product } from "./product";
export const Products = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      {showFilter ? <ProductFilter setShowFilter={setShowFilter} /> : null}
      <div className="products-filters-container">
        <div className="products-filters" onClick={() => setShowFilter(true)}>
          <BsFilterRight style={{ width: "20px", height: "20px" }} />
          <p>Filters</p>
        </div>
      </div>
      <div className="products-container">
        {productsData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
