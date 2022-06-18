import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import Card from "../Card/Card";
import "./NewProducts.css";
const NewProducts = () => {
  const { getProducts, products } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState(8);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      new: "new",
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
        <h3 id="hits-title">Новинки</h3>
      </div>
      <div className="hits-card-wrapper container">
        {slice.length > 0
          ? slice.map((item) => <Card key={item.id} item={item} />)
          : null}
      </div>
      <div className="also-wrapper">
        <button style={visible} onClick={() => loadMore()}>
          Ещё
        </button>
      </div>
    </>
  );
};

export default NewProducts;
