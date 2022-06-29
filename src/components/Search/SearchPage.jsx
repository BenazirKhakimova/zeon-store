import React, { useContext, useEffect, useState } from "react";
import "./SearchPage.css";
import { Pagination } from "antd";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import Card from "../../components/Card/Card";
import Breadcrumb from "antd/lib/breadcrumb";
import CardCarousel from "../CardCarousel/CardCarousel";
import SimilarCarousel from "../CardCarousel/SimilarCarousel";
const SearchPage = () => {
  const { products, getProducts } = useContext(contextProduct);
  const [limit, setLimit] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [count, setCount] = useState(0);
  const params = useParams();
  const res = params.getValue;

  const newSearchedProduct = products.filter((value) => {
    return value.name.toLowerCase().includes(res.toLowerCase());
  });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb">
              <Link to="/">Главное</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb">
              <Link to="/searchPage/:getValue">Результаты поиска</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      {newSearchedProduct.length > 0 ? (
        <>
          <div className="container">
            <p id="search-res">{`Результаты поиска по запросу: ${res}`}</p>
          </div>

          <div className="container grid search-card-wrapper">
            {newSearchedProduct.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="container">
          <p id="search-res">{`Результаты поиска по запросу: ${res}`}</p>
          <p className="busket-subtitle">
            По Вашему запросу ничего не найдено.
          </p>
          <div>
            <h2 id="title">Возможно Вас заинтересует</h2>
            <div className="container flex">
              {products.slice(0, 5).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            <div className="container card-carousel-wrapper">
              <SimilarCarousel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
