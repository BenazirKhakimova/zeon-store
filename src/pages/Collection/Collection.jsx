import React, { useContext, useEffect, useState } from "react";
import { Card, Empty, Pagination } from "antd";
import "./Collection.css";
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ScrollToTopIntoPage from "../../components/ScrollToTop/ScrollToTopIntoPage";
import Loading from "../../components/Loading/Loading";

const Collection = () => {
  const { collections, getCollections, productsCount, getProducts } =
    useContext(contextProduct);

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    getCollections();
    getProducts();
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <BreadCrumb />
      <ScrollToTopIntoPage />
      <div className="container">
        <h2 id="title">Коллекции</h2>
      </div>
      <div className="container grid">
        {collections.length > 0
          ? collections.map((item) => (
              <Card key={item.id} className="collec-card">
                <Link to={`${item.link}`}>
                  <img className="collec-img" src={item.collImg} alt="img" />
                  <h3 id="collec-title">{item.title}</h3>

                  <button className="collec-btn">Смотреть все</button>
                </Link>
              </Card>
            ))
          : null}
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
