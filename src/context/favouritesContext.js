import React from "react";
import { useReducer } from "react";

export const favouritesContext = React.createContext();

const INIT_STATE = {
  favourites: {},
  favouritesLength: 0,
  favouritesCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
        favouritesLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FavouritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favorites"));
    if (!favourites) {
      favourites = {
        products: [],
      };
    }
    localStorage.setItem("favorites", JSON.stringify(favourites));
    dispatch({
      type: "GET_FAVOURITES",
      payload: favourites,
    });
  };

  const addProductToFavourites = (favorite) => {
    let favourites = JSON.parse(localStorage.getItem("favorites"));
    if (!favourites) {
      favourites = {
        products: [],
      };
    }

    let newFavorite = {
      element: favorite,
    };

    let isProductInFavourites = favourites.products.some(
      (item) => item.element.id === favorite.id
    );
    if (isProductInFavourites) {
      favourites.products = favourites.products.filter(
        (item) => item.element.id !== favorite.id
      );
    } else {
      favourites.products.push(newFavorite);
    }
    localStorage.setItem("favorites", JSON.stringify(favourites));
    getFavourites();
  };

  const checkItemInFavourites = (id) => {
    let favourites = JSON.parse(localStorage.getItem("favorites"));
    if (!favourites) {
      favourites = {
        products: [],
      };
    }
    let isProductInFavourites = favourites.products.some(
      (item) => item.element.id === id
    );

    return isProductInFavourites;
  };

  const deleteItemFromFavourites = (id) => {
    let favourites = JSON.parse(localStorage.getItem("favorites"));
    if (!favourites) {
      favourites = {
        products: [],
      };
    }
    favourites.products = favourites.products.filter(
      (item) => item.element.id !== id
    );
    localStorage.setItem("favorites", JSON.stringify(favourites));
    getFavourites();
  };
  return (
    <favouritesContext.Provider
      value={{
        favourites: state.favourites,
        favouritesLength: state.favouritesLength,
        getFavourites,
        addProductToFavourites,
        checkItemInFavourites,
        deleteItemFromFavourites,
      }}
    >
      {children}
    </favouritesContext.Provider>
  );
};
export default FavouritesContextProvider;
