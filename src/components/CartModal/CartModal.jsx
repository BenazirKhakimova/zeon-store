import React, { useContext } from "react";
import "./CartModal.css";
import { Modal } from "antd";
import { useState } from "react";
import check from "../../assets/icon/check.png";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { contextProduct } from "../../context/productContext";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import { Field } from "formik";
import { useEffect } from "react";

const CartModal = () => {
  const { deleteAllProducts, getCart } = useContext(cartContext);
  const { handlePostOrders } = useContext(contextProduct);
  const [visible, setVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  useEffect(() => {
    getCart();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  const showModal2 = () => {
    setModal2Visible(true);
  };

  const hideModal2 = () => {
    setModal2Visible(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Заполните поле!";
    } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.firstName)) {
      errors.firstName = "Ваше Имя";
    }
    if (!values.lastName) {
      errors.lastName = "Заполните поле!";
    } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.lastName)) {
      errors.lastName = "Ваше Фамилие";
    }
    if (!values.email) {
      errors.email = "Заполните поле!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Электронная почта";
    }
    if (values.phone) {
      errors.phone = "Заполните поле";
    } else if (values.phone.length < 7) {
      errors.phone = "Ваш номер пожалуйста! ";
    }
    if (!values.country) {
      errors.country = "Заполните поле!";
    } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.country)) {
      errors.country = "Страна";
    }
    if (!values.city) {
      errors.city = "Заполните поле!";
    } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.city)) {
      errors.city = "Город";
    }
    if (!values.toggle) {
      errors.toggle = "";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      toggle: false,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handlePostOrders(values, null, 2);
      resetForm({ values: "" });
    },
  });

  const handleClose = () => {
    if (
      formik.errors.email ||
      formik.errors.firstName ||
      formik.errors.lastName ||
      formik.errors.phone ||
      formik.errors.country ||
      formik.errors.city
    ) {
      return formik.errors;
    } else {
      showModal2();
      hideModal();
    }
  };
  return (
    <div>
      <div className="check-out-btn">
        <button onClick={showModal}>Оформление заказа</button>
      </div>

      <Modal
        title="Оформление заказа"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
        centered
      >
        <form onSubmit={formik.handleSubmit} className="cart-modal">
          {formik.errors.firstName ? (
            <lable className="error">{formik.errors.firstName}</lable>
          ) : (
            <label className="cart-modal-label" htmlFor="name">
              Ваше имя
            </label>
          )}

          <input
            className="cart-modal-input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Например Иван"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          {formik.errors.lastName ? (
            <lable className="error">{formik.errors.lastName}</lable>
          ) : (
            <label className="cart-modal-label" htmlFor="surname">
              Ваше фамилия
            </label>
          )}

          <input
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="cart-modal-input"
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Например Иванов"
          />

          {formik.errors.email ? (
            <lable className="error">{formik.errors.email}</lable>
          ) : (
            <label className="email-label" htmlFor="email">
              Электронная почта
            </label>
          )}

          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            className="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />

          {formik.errors.phone ? (
            <lable className="error">{formik.errors.phone}</lable>
          ) : (
            <label className="cart-modal-label" htmlFor="">
              Ваш номер телефона
            </label>
          )}

          <PhoneInput
            placeholder="Enter phone number"
            international
            value={formik.values.phone}
            onChange={formik.handleChange}
            defaultCountry="KG"
            className="phone-input"
            name="phone"
            id="phone"
          />

          {formik.errors.country ? (
            <lable className="error">{formik.errors.country}</lable>
          ) : (
            <label className="cart-modal-label" htmlFor="country">
              Страна
            </label>
          )}

          <input
            value={formik.values.country}
            onChange={formik.handleChange}
            className="cart-modal-input"
            type="text"
            name="country"
            id="country"
            placeholder="Страна"
          />

          {formik.errors.city ? (
            <lable className="error">{formik.errors.city}</lable>
          ) : (
            <label className="cart-modal-label" htmlFor="city">
              Город
            </label>
          )}

          <input
            value={formik.values.city}
            onChange={formik.handleChange}
            className="cart-modal-input"
            type="text"
            name="city"
            id="city"
            placeholder="Город"
          />

          <div>
            <input
              className="cart-modal-checkbox"
              type="checkbox"
              onChange={formik.handleChange}
              values={formik.errors.toggle}
              name="toggle"
              id="toggle"
            />
            <label htmlFor="checked" className="label">
              Согласен с условиями
              <Link className="cart-modal-link" to={"/offer"}>
                публичной оферты
              </Link>
            </label>
          </div>

          {!formik.values.toggle ? (
            <button className="cart-modal-button">Заказать</button>
          ) : (
            <button
              onClick={() => handleClose()}
              type="submit"
              className="active-button"
            >
              Заказать
            </button>
          )}
        </form>
      </Modal>

      <Modal
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        footer={null}
        className="second-modal-wrapper"
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
              hideModal2();
              deleteAllProducts();
            }}
            className="btn-modal btn-3"
          >
            Продолжить покупки
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
