export const calcTotalPrice = (products) => {
  let totalPrice = 0;
  if (!products) {
    return totalPrice;
  } else {
    products.forEach((item) => {
      totalPrice += +item.subPrice;
    });
    return totalPrice;
  }
};

export const calcSubPrice = (product) => {
  return +product.count * +product.product?.price;
};

export const calcDiscount = (product) => {
  let productDiscount = 0;
  if (!product) {
    return productDiscount;
  } else {
    product.forEach((item) => {
      {
        item.discaunt
          ? (productDiscount += item.count)
          : (productDiscount += 0);
      }
    });
    return productDiscount;
  }
};

export const calcDis = (product) => {
  if (product.product.productDiscount) {
    return +product.product.productDiscount * +product.count;
  }
};

export const totalCount = (product) => {
  let totalCount = 0;
  if (!product) {
    return totalCount;
  } else {
    product.forEach((item) => {
      totalCount += item.count;
    });
    return totalCount;
  }
};
