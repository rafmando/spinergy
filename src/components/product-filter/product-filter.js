import "../../css/product-filter.css";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const ProductFilter = (props) => {
  const { setShowFilter } = props;
  const showSizes = true;
  const showColors = true;
  const colorsList = ["blue", "pink"];
  return (
    <div className="product-filter-menu">
      <div className="product-filter-title">
        <h1>FILTERS </h1>
        <GrClose onClick={() => setShowFilter(false)} />
      </div>
      <div className="product-filter-category-box">
        <h2>SIZE</h2>
        {showSizes ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {showSizes ? (
        <div>
          <ul>
            <div className="size">
              <input type="checkbox" id="xs" value="xs"></input>
              <p>XS</p>
            </div>
            <div className="size">
              <input type="checkbox" id="xs" value="s"></input>
              <p>S</p>
            </div>
            <div className="size">
              <input type="checkbox" id="m" value="m"></input>
              <p>M</p>
            </div>
            <div className="size">
              <input type="checkbox" id="l" value="l"></input>
              <p>L</p>
            </div>
            <div className="size">
              <input type="checkbox" id="xl" value="xl"></input>
              <p>XL</p>
            </div>
            <div className="size">
              <input type="checkbox" id="xxl" value="xxl"></input>
              <p>XXL</p>
            </div>
          </ul>
        </div>
      ) : null}

      <div className="product-filter-category-box">
        <h2>COLOR</h2>
        {showColors ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {showColors ? (
        <div>
          <div className="colors">
            {colorsList.map((clr, index) => {
              return (
                <div
                  key={index}
                  className="color"
                  style={{ backgroundColor: `${clr}` }}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="product-filter-category-box">
        <h2>PRICE</h2>
        <AiOutlinePlus />
      </div>
    </div>
  );
};
