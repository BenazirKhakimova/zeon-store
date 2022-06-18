import React, { useContext, useEffect, useState } from "react";
import { Card, Empty, Pagination } from "antd";
import "./Collection.css";
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

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
      <BreadCrumb />
      <div className="container">
        <h2 id="title">Коллекции</h2>
      </div>
      <div className="container grid">
        {collections.length > 0 ? (
          collections.map((item) => (
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
      <div className="container pagination">
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
      </div>
    </>
  );
};

export default Collection;
