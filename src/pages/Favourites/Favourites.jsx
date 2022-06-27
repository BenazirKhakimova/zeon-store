import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import { favouritesContext } from "../../context/favouritesContext";
import { contextProduct } from "../../context/productContext";
import Card from "../../components/Card/Card";
import "./Favourites.css";

const Favourites = () => {
  const { favourites, getFavourites } = useContext(favouritesContext);
  const { getProducts, products } = useContext(contextProduct);
  const [limit, setLimit] = useState(8);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getFavourites();
    getProducts();
  }, []);

  const slice = favourites?.products?.slice(0, limit);
  useEffect(() => {
    document.addEventListener("scroll", loadMore);
    return function () {
      document.removeEventListener("scroll", loadMore);
    };
  }, [fetching]);

  const loadMore = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLimit(limit + limit);
      setFetching(true);
    }
  };
  return (
    <div>
      <FloatingButton />
      <BreadCrumb />
      {slice?.length > 0 ? (
        <>
          <div className="container">
            <h2 id="title">Избранное</h2>
            <p id="favourites-subtitle">
              Товаров в избранном: {favourites.products.length}
            </p>
          </div>
          <div className="grid container fav-wrapper">
            {slice.map((item) => (
              <Card
                key={item.element.id}
                item={item.element}
                index={item.element.index}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="container">
          <h2 id="title">Избранное</h2>
          <p className="busket-subtitle">У вас пока нет товаров в избранном</p>
          <div>
            <h2 id="title">Возможно Вас заинтересует</h2>
            <div className="container flex">
              {products.slice(0, 5).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
