import "../../css/product-filter.css";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import {
  getColorsAvailable,
  priceRangesOptions,
  sizeOptions,
} from "./product-filter.utils";
import { productsData } from "../productsData";

export const ProductFilter = (props) => {
  const { setShowFilter, products, setProducts } = props;
  const colors = getColorsAvailable(productsData);

  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const submitFilterValues = () => {
    products.map((product) => {
      if (
        product.sizes.includes(size) &&
        product.colors.includes(color) &&
        product.price < priceRange
      ) {
        filteredProducts.push(product);
      }
    });
    setProducts(filteredProducts);
    setFilteredProducts([]);
  };

  const reset = () => {
    setProducts(productsData);
  };

  return (
    <>
      <div className="product-filter-menu">
        <div className="product-filter-title">
          <h1>FILTERS </h1>
          <GrClose onClick={() => setShowFilter(false)} />
        </div>
        <div className="product-filter-category-box">
          <h2>SIZE</h2>
          {showSizes ? (
            <AiOutlineMinus onClick={() => setShowSizes(false)} />
          ) : (
            <AiOutlinePlus onClick={() => setShowSizes(true)} />
          )}
        </div>
        {showSizes ? (
          <div>
            <ul>
              {sizeOptions.map((sizeOption) => (
                <div className="size">
                  <input
                    type="checkbox"
                    id={sizeOption.value}
                    checked={size === sizeOption.value}
                    value={sizeOption.value}
                    onChange={() => setSize(sizeOption.value)}
                  ></input>
                  <p>{sizeOption.label}</p>
                </div>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="product-filter-category-box">
          <h2>COLOR</h2>
          {showColors ? (
            <AiOutlineMinus onClick={() => setShowColors(false)} />
          ) : (
            <AiOutlinePlus onClick={() => setShowColors(true)} />
          )}
        </div>
        {showColors ? (
          <div>
            <div className="colors">
              {colors.map((clr, index) => (
                <input
                  type="checkbox"
                  key={index}
                  id={clr}
                  checked={color === clr.value}
                  className="color"
                  onClick={() => setColor(clr)}
                  style={{
                    accentColor: `${clr}`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : null}
        <div className="product-filter-category-box">
          <h2>PRICE</h2>
          {showPrices ? (
            <AiOutlineMinus onClick={() => setShowPrices(false)} />
          ) : (
            <AiOutlinePlus onClick={() => setShowPrices(true)} />
          )}
        </div>
        {showPrices ? (
          <div>
            <ul>
              {priceRangesOptions.map((pr) => (
                <div className="price-range">
                  <input
                    type="checkbox"
                    checked={priceRange === pr.value}
                    value={pr.value}
                    onChange={() => setPriceRange(pr.value)}
                  ></input>
                  <p>{pr.label}</p>
                </div>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="buttons-container">
        <button className="filter-button" onClick={() => submitFilterValues()}>
          filter bikes
        </button>
        <button className="filter-button" onClick={() => reset()}>
          reset filter
        </button>
      </div>
    </>
  );
};
