import React from "react";
import { Breadcrumb } from "antd";
import "./BreadCrumb.css";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const mainPages = () => {
    if (pathname === "/about") {
      return <p>О нас</p>;
    } else if (pathname === "/news") {
      return <p>Новости</p>;
    } else if (pathname === "/cart") {
      return <p>Корзина</p>;
    } else if (pathname === "/favourites") {
      return <p>Избранное</p>;
    } else if (pathname === "/help") {
      return <p>Помощь</p>;
    } else if (pathname === "/offer") {
      return <p>Публичная оферта</p>;
    } else if (pathname === "/collection") {
      return <p>Коллекции</p>;
    } else if (pathname === "/searchPage") {
      return <p>Результаты поиска</p>;
    } else {
      return null;
    }
  };

  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb">
            <Link to="/">Главное</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb">
            <a href="">{mainPages()}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadCrumb;
