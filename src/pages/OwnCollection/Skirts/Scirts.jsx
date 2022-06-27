import { Breadcrumb, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import IntoPage from "../../../components/BreadCrumb/IntoPage";
import Card from "../../../components/Card/Card";
import FloatingButton from "../../../components/FloatingButtons/FloatingButton";
import ScrollToTopIntoPage from "../../../components/ScrollToTop/ScrollToTopIntoPage";
import { contextProduct } from "../../../context/productContext";

const Skirts = () => {
  const { getProducts, products, productsCount } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(12);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      skirt: "skirt",
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const { pathname } = useLocation();
  const intoPages = () => {
    if (pathname === "/winter") {
      return <p>Коллекция зима 2022</p>;
    } else if (pathname === "/goout") {
      return <p>Для выезда на природу</p>;
    } else if (pathname === "/skirts") {
      return <p>Юбки</p>;
    } else if (pathname === "/summer") {
      return <p>Коллекция лето 2022</p>;
    } else if (pathname === "/dresses") {
      return <p>Платья</p>;
    } else if (pathname === "/goout") {
      return <p>Для выезда на природу</p>;
    } else {
      return null;
    }
  };

  return (
    <>
       <div className="breadcrumb-wrapper">
        <div className="container">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb">
              <Link to="/">Главное</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb">
              <Link to="/collection">Коллекции</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item className="breadcrumb">
              <a href="">{intoPages()}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <FloatingButton /> */}
      <ScrollToTopIntoPage />
      <div className="container">
        <h2 id="title">Юбки</h2>
      </div>
      <div className="grid container">
        {products.length > 0
          ? products.map((item) => <Card key={item.id} item={item} />)
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
      <div className="container">
        <h2 id="title">Новинки</h2>
        <div className="flex">
          {products.slice(0, 5).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skirts;
