import React, { useContext, useEffect, useState } from "react";
import { Card, Empty, Pagination } from "antd";
import "./Collection.css";
import { Link, useSearchParams } from "react-router-dom";

import img1 from "../../../src/assets/collection/image1.png";
import { contextProduct } from "../../context/productContext";

const Collection = () => {
  const { collections, getCollections, productsCount } =
    useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    getCollections();
  }, []);

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getCollections();
  }, [searchParams]);

  return (
    <>
      <div className="container">
        <h2 id="title">Коллекции</h2>
      </div>
      <div className="container collection-wrapper">
        {collections.length > 0 ? (
          collections.map((item) => (
            <Card
              style={{
                width: "286px",
                height: "374px",
                overflow: "hidden",
                marginTop: "18px",
              }}
            >
              <img className="collec-img" src={item.img} alt="img" />
              <h3 id="collec-title">{item.title}</h3>
              <Link to="/collection/:id">
                <button className="collec-btn">Смотреть все</button>
              </Link>
            </Card>
          ))
        ) : (
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Empty />
          </div>
        )}
      </div>
      <divs className="container pagination">
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </divs>
    </>
  );
};

export default Collection;
