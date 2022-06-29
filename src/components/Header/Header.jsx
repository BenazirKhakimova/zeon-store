import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import heart from "../../../src/assets/icon/Vector.png";
import shopping from "../../../src/assets/icon/shopping-bag 1.png";
import line from "../../../src/assets/icon/Line.png";
import logoSmall from "../../assets/icon/logo-small.png";
import burgerMenu from "../../../src/assets/icon/burger-menu.png";
import whatsapp from "../../assets/icon/whatsapp (1).png";
import telegram from "../../assets/icon/telegram (1).png";
import phone from "../../assets/icon/telephone.png";
import search from "../../../src/assets/icon/search.png";
import cleare from "../../../src/assets/icon/call back.png";
import { Drawer, Badge, Modal } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
import "animate.css";
import { favouritesContext } from "../../context/favouritesContext";
import Search from "../Search/Search";
// import { useFormik } from "formik";
import { cartContext } from "../../context/cartContext";
import { useFormik } from "formik";
import check from "../../assets/icon/check.png";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Заполните поле!";
  } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.firstName)) {
    errors.firstName = "Введите Ваше имя пожалуйста!";
  }

  if (!values.phone) {
    errors.phone = "Заполните поле";
  } else if (
    !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)
  ) {
    errors.phone = "Введите Ваш номер пожалуйста! ";
  }
  return errors;
};

const Header = () => {
  const { contacts, getContacts, products, oneProduct, getValue } =
    useContext(contextProduct);
  const { favouritesLength, getFavourites } = useContext(favouritesContext);
  const { cartLength, getCart } = useContext(cartContext);
  const { postCallBack } = useContext(contextProduct);
  const [visible, setVisible] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const novigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    getContacts();
    getFavourites();
    getCart();
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      postCallBack(values, null, 2);
      resetForm({ values: "" });
    },
  });

  let styleVisible = {
    visibility: "visible",
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
                {favouritesLength > 0 ? (
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
                {cartLength > 0 ? (
                  <Badge dot size="large">
                    <img src={shopping} alt="shopping" />
                  </Badge>
                ) : (
                  <img src={shopping} alt="shopping" />
                )}

                <Link to={"/cart"}>
                  <h3>Корзина</h3>
                </Link>
              </div>
            </div>

            <div className="burger-menu container">
              <div className="sm-navbar">
                <div onClick={() => setVisible(true)}>
                  <img src={burgerMenu} alt="logo" />
                </div>

                <Link to="/">
                  <img src={logoSmall} id="logo-small" alt="" />
                </Link>
                <div>
                  {openSearch ? (
                    <img
                      onClick={() => setOpenSearch(false)}
                      src={cleare}
                      alt="cleare"
                    />
                  ) : (
                    <img
                      onClick={() => setOpenSearch(true)}
                      src={search}
                      alt="search"
                    />
                  )}
                  {openSearch ? <Search setOpenSearch={setOpenSearch} /> : null}
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
                    <p onClick={() => onClose()}>О нас</p>
                  </Link>
                  <Link to={"/collection"}>
                    <p onClick={() => onClose()}>Коллекции </p>
                  </Link>
                  <Link to={"/news"}>
                    <p onClick={() => onClose()}>Новости </p>
                  </Link>
                  <div className="liniar"></div>

                  <div>
                    <Link to={"/favourites"}>
                      <div onClick={() => onClose()} className="menu-link">
                        {favouritesLength > 0 ? (
                          <Badge dot size="large">
                            <img src={heart} alt="heart" />
                          </Badge>
                        ) : (
                          <img src={heart} alt="heart" />
                        )}
                        <p>Избранное</p>
                      </div>
                    </Link>
                    <Link to={"/cart"}>
                      <div onClick={() => onClose()} className="menu-link">
                        {cartLength > 0 ? (
                          <Badge dot size="large">
                            <img src={shopping} alt="shopping" />
                          </Badge>
                        ) : (
                          <img src={shopping} alt="shopping" />
                        )}
                        <p>Корзина</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="menu-bottom">
                  <p>Свяжитсь с нами:</p>
                  <a
                    onClick={() => onClose()}
                    href={`tel:${item.phone3}`}
                    className="nav-phone"
                  >
                    <h3 style={{ color: "#979797" }}>Тел:</h3>
                    <h3>+996 000 00 00 00</h3>
                  </a>
                  <div className="back-call-links">
                    <a
                      onClick={() => onClose()}
                      target="_blank"
                      href={item.telegram}
                    >
                      <img src={telegram} alt="" />
                    </a>
                    <a
                      onClick={() => onClose()}
                      target="_blank"
                      href={item.whatsapp}
                    >
                      <img src={whatsapp} alt="" />
                    </a>
                    <a
                      onClick={() => {
                        onClose();
                        setModal1Visible(true);
                      }}
                      target="_blank"
                      href={item.phone}
                    >
                      <img src={phone} alt="" />
                    </a>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      ))}

      <div className="container">
        <Modal
          centered
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
          footer={null}
          className="first-modal"
          style={styleVisible}
        >
          <>
            <form className="fb-modal" onSubmit={formik.handleSubmit}>
              <div className="modal-text">
                <h3>Если у Вас остались вопросы</h3>
                <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
              </div>

              <div className="modal-inp">
                <input
                  className="first-inp placeholder type"
                  type="text"
                  placeholder="Как к Вам обращаться?"
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}

                <input
                  className="second-inp placeholder type"
                  type="text"
                  placeholder="Номер телефона"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}

                {formik.errors.phone || !formik.values.phone ? (
                  <button
                    disabled="disabled"
                    type="button"
                    className="btn-modal btn-1"
                  >
                    Заказать Звонок
                  </button>
                ) : formik.errors.firstName || !formik.values.firstName ? (
                  <button
                    disabled="disabled"
                    type="button"
                    className="btn-modal btn-1"
                  >
                    Заказать Звонок
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => {
                      setModal1Visible(false);
                      setModal2Visible(true);
                    }}
                    className="btn-modal btn-2"
                  >
                    Заказать Звонок
                  </button>
                )}
              </div>
            </form>
          </>
        </Modal>
      </div>
      <Modal
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        footer={null}
        id="second-modal-wrapper"
        style={{ width: "350px" }}
      >
        <div className="second-modal">
          <img src={check} alt="check" />
          <div className="titles-wrapper">
            <h3 className="fb-title">Спасибо!</h3>
            <h3 className="fb-sub-title">
              Ваша заявка была принята ожидайте, скоро Вам перезвонят
            </h3>
          </div>

          <button
            onClick={() => {
              novigate(-1);
              setModal2Visible(false);
            }}
            className="btn-modal btn-3"
          >
            Продолжить покупки
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
