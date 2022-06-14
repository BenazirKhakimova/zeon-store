import { Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import Also from "../Also/Also";
import Card from "../Card/Card";
import "./Hits.css";
const Hits = () => {
  const { getProducts, products } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState(8);
  console.log("products", products);

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
  return (
    <>
      <div className="container hits-title-wrapper">
        <h3 id="hits-title">Хит продаж</h3>
      </div>
      <div className="hits-card-wrapper container">
        {slice.length > 0
          ? slice.map((item) => <Card key={item.id} item={item} />)
          : null}
      </div>
      <div className="also-wrapper">
        {slice.length[-1] ? null : (
          <button className="load-more" onClick={() => loadMore()}>
            Ещё
          </button>
        )}
      </div>
    </>
  );
};

export default Hits;
