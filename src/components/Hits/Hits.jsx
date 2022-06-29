import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import Card from "../Card/Card";
import CardCarousel from "../CardCarousel/CardCarousel";
import "./Hits.css";
const Hits = () => {
  const { getProducts, products } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState(8);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      hits: "hits",
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const slice = products.slice(0, items);

  const loadMore = () => {
    setItems(items + items);
  };
  let visible = {
    display: "block",
  };
  if (products.length <= items) {
    visible = {
      visibility: "hidden",
    };
  }
  return (
    <>
      <div className="container hits-title-wrapper">
        <h3 id="hits-title">Хит продаж</h3>
      </div>
      <div className="hits-card-wrapper container">
        {slice.length > 0
          ? slice.map((item, i) => <Card key={item.id} item={item} i={i} />)
          : null}
      </div>

      <div className="container card-carousel-wrapper">
        <CardCarousel />
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

export default Hits;
