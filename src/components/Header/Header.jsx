import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import heart from "../../../src/assets/icon/Vector.png";
import shopping from "../../../src/assets/icon/shopping-bag 1.png";
import line from "../../../src/assets/icon/Line.png";
import logoSmall from "../../assets/icon/logo-small.png";
import burgerMenu from "../../../src/assets/icon/burger-menu.png";
import whatsapp from "../../assets/icon/whatsapp (1).png";
import telegram from "../../assets/icon/telegram (1).png";
import search from "../../../src/assets/icon/search.png";
import { Drawer, Badge } from "antd";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import Modal from "../Modal/Modal";
import "animate.css";
import { favouritesContext } from "../../context/favouritesContext";
import Search from "../Search/Search";

const Header = () => {
  const { contacts, getContacts, products } = useContext(contextProduct);
  const { favourites } = useContext(favouritesContext);

  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    getContacts();
  }, []);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {contacts.map((item) => (
        <div key={item.id}>
          <div className="navbar-wrapper">
            <div className="container navbar">
              <div className="nav-link">
                <Link to={"/about"}>
                  <h3>О нас</h3>
                </Link>
                <Link to={"/collection"}>
                  <h3>Коллекции </h3>
                </Link>
                <Link to={"/news"}>
                  <h3>Новости </h3>
                </Link>
              </div>

              <a href={`tel:${item.phone3}`} className="nav-phone">
                <h3 style={{ color: "#979797" }}>Тел:</h3>
                <h3>+996 000 00 00 00</h3>
              </a>
            </div>
          </div>

          <div className="navbar-wrapper">
            <div className="container nav">
              <Link to={"/"}>
                <img id="nav-logo" src={item.logoNav} alt="logo" />
              </Link>
              <Search products={products} key={products.id} />
              <div className="cart-favourites">
                {favourites.products?.length > 0 ? (
                  <Badge dot size="large">
                    <img src={heart} alt="heart" />
                  </Badge>
                ) : (
                  <img src={heart} alt="heart" />
                )}

                <Link to={"/favourites"}>
                  <h3>Избранное</h3>
                </Link>
                <div>
                  <img id="line" src={line} alt="line" />
                </div>
                <img src={shopping} alt="shopping" />
                <Link to={"/cart"}>
                  <h3>Корзина</h3>
                </Link>
              </div>
            </div>

            <div className="burger-menu container">
              <div className="sm-navbar">
                <img src={burgerMenu} alt="logo" onClick={showDrawer} />
                <img src={logoSmall} id="logo-small" alt="" />

                <div>
                  {clicked % 2 === 0 ? null : (
                    <input id="menu-search" type="text" placeholder="Поиск" />
                  )}
                  <img
                    src={search}
                    alt=""
                    onClick={() => setClicked(clicked + 1)}
                  />
                </div>
              </div>
              <Drawer
                title="Меню"
                placement="left"
                onClose={onClose}
                visible={visible}
              >
                <div className="menu-links">
                  <Link to={"/about"}>
                    <p>О нас</p>
                  </Link>
                  <Link to={"/collection"}>
                    <p>Коллекции </p>
                  </Link>
                  <Link to={"/news"}>
                    <p>Новости </p>
                  </Link>
                  <div className="liniar"></div>

                  <div>
                    <Link to={"/favourites"}>
                      <div className="menu-link">
                        <img src={heart} alt="heart" />
                        <p>Избранное</p>
                      </div>
                    </Link>
                    <Link to={"/cart"}>
                      <div className="menu-link">
                        <img src={shopping} alt="shopping" />
                        <p>Корзина</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="menu-bottom">
                  <p>Свяжитсь с нами:</p>
                  <a href={`tel:${item.phone3}`} className="nav-phone">
                    <h3 style={{ color: "#979797" }}>Тел:</h3>
                    <h3>+996 000 00 00 00</h3>
                  </a>
                  <div className="back-call-links">
                    <a target="_blank" href={item.telegram}>
                      <img src={telegram} alt="" />
                    </a>
                    <a target="_blank" href={item.whatsapp}>
                      <img src={whatsapp} alt="" />
                    </a>
                    <Modal />
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Header;
