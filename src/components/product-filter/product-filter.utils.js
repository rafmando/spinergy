export const getColorsAvailable = (products) => {
  const colorsOfProductsList = products.map((product) => {
    return product.colors;
  });

  const mergeProductSizesList = colorsOfProductsList.flat(1);
  return mergeProductSizesList;
};

export const getPricesAvailable = (products) => {
  const pricesOfProductsList = products.map((product) => {
    return product.prices;
  });

  const mergeProductPricesList = pricesOfProductsList.flat(1);
  return mergeProductPricesList;
};

export const priceRangesOptions = [
  { label: "$0 - $500", value: 500 },
  { label: "$500 - $1000", value: 1000 },
  { label: "$1000 - $1500", value: 1500 },
];

export const sizeOptions = [
  { label: "xs", value: "xs" },
  { label: "s", value: "s" },
  { label: "m", value: "m" },
  { label: "l", value: "l" },
  { label: "xl", value: "xl" },
];
