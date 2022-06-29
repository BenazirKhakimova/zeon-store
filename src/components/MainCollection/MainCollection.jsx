import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import "./MainCollection.css";

import MainColectionCard from "./MainColectionCard";
import CollectionCarousel from "./CollectionCarousel";
const MainCollection = () => {
  const { collections, getCollections } = useContext(contextProduct);
  const [items, setItems] = useState(4);

  useEffect(() => {
    getCollections();
  }, []);
  const collec = collections.slice(0, items);

  const loadMore = () => {
    setItems(items + items);
  };
  let visible = {
    display: "block",
  };
  if (collections.length <= items) {
    visible = {
      visibility: "hidden",
    };
  }

  return (
    <>
      <div className="container collection-title-wrapper">
        <h3 id="hits-title">Коллекции</h3>
      </div>
      <div className="container grid collection-wrapper">
        {collec.length > 0
          ? collec.map((item) => (
              <MainColectionCard item={item} key={item.id} />
            ))
          : null}
      </div>
      <div className="container card-carousel-wrapper">
        <CollectionCarousel />
      </div>
      <div className="also-wrapper">
        <button
          style={visible}
          className="load-more"
          onClick={() => loadMore()}
        >
          Ещё
        </button>
      </div>
    </>
  );
};

export default MainCollection;
