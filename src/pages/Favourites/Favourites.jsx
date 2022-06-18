import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Card from "../../components/Card/Card";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import SameProducts from "../../components/SameProducts/SameProducts";
import { favouritesContext } from "../../context/favouritesContext";
import { contextProduct } from "../../context/productContext";
import "./Favourites.css";
const Favourites = () => {
  const { favourites, getFavourites } = useContext(favouritesContext);
  useEffect(() => {
    getFavourites();
  }, []);
  return (
    <div>
      <FloatingButton />
      <BreadCrumb />
      {favourites.products?.length > 0 ? (
        <>
          <div className="container">
            <h2 id="title">Избранное</h2>
            <p id="favourites-subtitle">
              Товаров в избранном: {favourites.products.length}
            </p>
          </div>
          <div className="grid container fav-wrapper">
            {favourites.products.map((item) => (
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
            {/* <SameProducts /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
