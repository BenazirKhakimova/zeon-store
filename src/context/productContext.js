import axios from "axios";
import React, { useReducer } from "react";
import {
  CASES_GET_COLLECTIONS,
  CASES_GET_NEWS,
  CASES_GET_PRODUCTS,
} from "../helpers/cases";
import { COLLECTIONS_API, NEWS_API, PRODUCTS_API } from "../helpers/consts";

export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  news: [],
  collections: [],
  productsCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASES_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case CASES_GET_NEWS:
      return {
        ...state,
        news: action.payload.data,
      };
    case CASES_GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload.data,
        productsCount: action.payload.headers["x-total-count"],
      };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    let result = await axios(PRODUCTS_API + window.location.search);
    dispatch({
      type: CASES_GET_PRODUCTS,
      payload: result,
    });
  };

  const getNews = async () => {
    let result = await axios(NEWS_API + window.location.search);
    dispatch({
      type: CASES_GET_NEWS,
      payload: result,
    });
  };

  const getCollections = async () => {
    let result = await axios(COLLECTIONS_API + window.location.search);
    dispatch({
      type: CASES_GET_COLLECTIONS,
      payload: result,
    });
  };
  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        news: state.news,
        collections: state.collections,
        productsCount: state.productsCount,
        getProducts,
        getNews,
        getCollections,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ProductsContextProvider;
