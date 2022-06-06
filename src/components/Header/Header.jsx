import React from "react";
import "./Header.css";
import logo from "../../../src/assets/img/Logo.png";
import heart from "../../../src/assets/icon/Vector.png";
import shopping from "../../../src/assets/icon/shopping-bag 1.png";
import line from "../../../src/assets/icon/Line.png";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;

const onSearch = (value) => console.log(value);
const Header = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="container navbar">
          <div className="nav-link">
            <Link to={"/about"}>
              {" "}
              <h3>О нас</h3>
            </Link>
            <Link to={"/collection"}>
              <h3>Коллекции </h3>
            </Link>
            <Link to={"/news"}>
              <h3>Новости </h3>
            </Link>
          </div>

          <a href="tel:+996 000 00 00 00" className="nav-phone">
            <h3 style={{ color: "#979797" }}>Тел:</h3>
            <h3>+996 000 00 00 00</h3>
          </a>
        </div>
      </div>

      <div className="navbar-wrapper">
        <div className="container nav">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          <Space direction="vertical">
            <Search placeholder="Поиск" onSearch={onSearch} />
          </Space>
          <div className="cart-favourites">
            <img src={heart} alt="heart" />
            <Link to={"/favourites"}>
              <h3>Избранное</h3>
            </Link>
            <div>
              <img id="line" src={line} alt="line" />
            </div>
            <img src={shopping} alt="shopping" />
            <Link to={"/cart"}>
              <h3>Карзина</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
