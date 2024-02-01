import axios from "axios";
import React, { useReducer, useState } from "react";

import {
  CASES_GET_ABOUT_US,
  CASES_GET_COLLECTIONS,
  CASES_GET_CONTACTS,
  CASES_GET_DATA,
  CASES_GET_NEWS,
  CASES_GET_OFFER,
  CASES_GET_ONE_PRODUCT,
  CASES_GET_PRODUCTS,
} from "../helpers/cases";
import {
  CALLBACK_API,
  COLLECTIONS_API,
  CONTACTS_API,
  DATA_API,
  GET_ABOUT_US,
  GET_OFFER,
  NEWS_API,
  POST_ORDER,
  PRODUCTS_API,
} from "../helpers/consts";

export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  news: [],
  collections: [],
  data: [],
  productsCount: 0,
  contacts: [],
  offer: [],
  aboutUs: [],
};

const reducer = (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case CASES_GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload.data,
      };
    case CASES_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        productsCount: action.payload.headers["x-total-count"],
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
    case CASES_GET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case CASES_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    case CASES_GET_OFFER:
      return {
        ...state,
        offer: action.payload.data,
      };
    case CASES_GET_ABOUT_US:
      return {
        ...state,
        aboutUs: action.payload.data,
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

  const getOneProduct = async (id) => {
    let result = await axios(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: CASES_GET_ONE_PRODUCT,
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
  const getData = async () => {
    let result = await axios(DATA_API);
    dispatch({
      type: CASES_GET_DATA,
      payload: result,
    });
  };
  const getContacts = async () => {
    let result = await axios(CONTACTS_API);
    dispatch({
      type: CASES_GET_CONTACTS,
      payload: result,
    });
  };

  const getOffer = async () => {
    let result = await axios(GET_OFFER);
    dispatch({
      type: CASES_GET_OFFER,
      payload: result,
    });
  };

  const getAboutUs = async () => {
    let result = await axios(GET_ABOUT_US);
    dispatch({
      type: CASES_GET_ABOUT_US,
      payload: result,
    });
  };

  const postCallBack = async (values) => {
    await axios.post(CALLBACK_API, values);
  };

  const handlePostOrders = async (values) => {
    await axios.post(POST_ORDER, values);
  };

  const [foundProduct, setFoundProduct] = useState([]);
  const [getValue, setGetValue] = useState("");
  const handleSearch = (e, products = state.products) => {
    let value = e.target.value;
    setGetValue(value);
    let newFilter = products.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    if (value === "") {
      setFoundProduct([]);
    } else {
      setFoundProduct(newFilter);
    }
  };

  const [cartProduct, setProduct] = useState({});
  const handleChangeColor = (e, oneProduct = state.oneProduct) => {
    oneProduct.currentColor = e.target.id;
    oneProduct.colors.map((color, index) => {
      if (oneProduct.currentColor === color.color) {
        oneProduct.currentImg = oneProduct[`image${index + 1}`];
      }
    });
    setProduct(oneProduct);
  };

  
  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        news: state.news,
        collections: state.collections,
        contacts: state.contacts,
        productsCount: state.productsCount,
        data: state.data,
        oneProduct: state.oneProduct,
        foundProduct: foundProduct,
        getValue: getValue,
        cartProduct: cartProduct,
        offer: state.offer,
        aboutUs: state.aboutUs,
        setFoundProduct,
        setGetValue,
        getProducts,
        getNews,
        getCollections,
        getContacts,
        getData,
        getOneProduct,
        postCallBack,
        handleSearch,
        handleChangeColor,
        handlePostOrders,
        getOffer,
        getAboutUs
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ProductsContextProvider;
