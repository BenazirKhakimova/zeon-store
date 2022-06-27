import React from "react";
import { useReducer } from "react";
import {
  calcDis,
  calcDiscount,
  calcSubPrice,
  calcTotalPrice,
  totalCount,
} from "../helpers/calcPrice";
import { CASES_GET_CART } from "../helpers/cases";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: {},
  cartLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASES_GET_CART:
      return {
        ...state,
        cart: action.payload,
        cartLength: action.payload.products?.length,
      };
    default: {
      return state;
    }
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        productDiscount: 0,
        totalCount: 0,
      };
    }
    let newCartItem = {
      product: product,
      count: 1,
      subPrice: product.price,
      productDiscount: Math.ceil((product.price / 100) * product.discaunt),
    };
    let isProductInCart = cart.products.some(
      (item) =>
        item.product.currentColor === product.currentColor &&
        item.product.id === product.id
    );
    if (isProductInCart) {
      checkProductInCart(
        newCartItem.product.id,
        newCartItem.product.currentColor
      );
      cart.products = cart.products.filter(
        (item) =>
          item.product.currentColor !== product.currentColor &&
          item.product.id === product.id
      );
    } else {
      cart.products.push(newCartItem);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    cart.productDiscount = calcDiscount(cart.products);
    cart.totalCount = totalCount(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        productDiscaunt: 0,
        totalCount: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    cart.cartDiscaunt = calcDiscount(cart.products);
    dispatch({
      type: CASES_GET_CART,
      payload: cart,
    });
  };

  const checkProductInCart = (id, currentColor) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        productDiscount: 0,
        totalCount: 0,
      };
    }
    let isProductInCart = cart.products.some(
      (item) =>
        item.product.currentColor === currentColor && item.product.id === id
    );
    return isProductInCart;
  };

  const deleteProductfromCart = (id, currentColor) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        productDiscount: 0,
        totalCount: 0,
      };
    }
    cart.products = cart.products.filter(
      (item) =>
        item.product.currentColor !== currentColor && item.product.id === id
    );
    cart.totalCount = totalCount(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const countOfProduct = (count, currentColor, id) => {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        productDiscount: 0,
        totalCount: 0,
      };
    }
    cart.products = cart.products.map((item) => {
      if (
        item.product.id === id &&
        item.product.currentColor === currentColor
      ) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
        item.productDiscaunt = calcDis(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    cart.totalCount = totalCount(cart.products);
    cart.productDiscaunt = calcDiscount(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const deleteAllProducts = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLength: state.cartLength,
        getCart,
        addProductToCart,
        checkProductInCart,
        deleteProductfromCart,
        countOfProduct,
        deleteAllProducts,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
