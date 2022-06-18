import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import "./MainCollection.css";
const MainCollection = () => {
  const { collections, getCollections } = useContext(contextProduct);
  const [items, setItems] = useState(4);

  useEffect(() => {
    getCollections();
  }, []);
  const slice = collections.slice(0, items);

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
      <div className="container grid">
        {slice.length > 0
          ? slice.map((item) => (
              <Card
                key={item.id}
                style={{
                  width: "286px",
                  height: "374px",
                  overflow: "hidden",
                  marginTop: "18px",
                }}
              >
                <img className="collec-img" src={item.collImg} alt="img" />
                <h3 id="collec-title">{item.title}</h3>
                <Link to={`${item.link}`}>
                  <button className="collec-btn">Смотреть все</button>
                </Link>
              </Card>
            ))
          : null}
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
