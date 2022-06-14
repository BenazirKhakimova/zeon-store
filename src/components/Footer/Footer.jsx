import React, { useContext, useEffect } from "react";
import footerLogo from "../../../src/assets/img/footer-logo.png";
import instagram from "../../../src/assets/icon/instagram.png";
import telegram from "../../../src/assets/icon/telegram.png";
import whatsapp from "../../../src/assets/icon/whatsapp.png";
import phone from "../../../src/assets/icon/phone.png";
import mail from "../../../src/assets/icon/gmail.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/productContext";
const Footer = () => {
  const { contacts, getContacts } = useContext(contextProduct);

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="footer-wrapper">
      {contacts.map((item) => (
        <div key={item.id} className="container footer-items-wrapper">
          <Link to={"/"}>
            <img src={item.logoFooter} alt="logo" />
          </Link>
          <div className="footer-item">
            <h2 id="first-child">Компания</h2>
            <Link to={"/about"}>
              <h3>О нас</h3>
            </Link>
            <Link to={"/news"}>
              <h3>Новости</h3>
            </Link>
            <Link to={"/help"}>
              <h3>Помощь</h3>
            </Link>
          </div>

          <div className="footer-item">
            <h2 id="first-child">Контакты</h2>
            <a href={`tel:${item.phone1}`} className="item-wrapper">
              <img src={phone} alt="phone" />
              <h3>+996 500 123 456</h3>
            </a>
            <a href={`tel:${item.phone1}`} className="item-wrapper">
              <img src={phone} alt="phone" />
              <h3>+996 500 123 456</h3>
            </a>
            <a href={`mailto:${item.email}`} className="item-wrapper">
              <img src={mail} alt="mail" />
              <h3>mail@gmail.com</h3>
            </a>
          </div>

          <div className="footer-item">
            <h2 id="first-child">Мы в социальных сетях</h2>
            <a href={item.instagram} target="_blank" className="item-wrapper">
              <img src={instagram} alt="" />
              <h3>Instagram</h3>
            </a>
            <a href={item.telegram} target="_blank" className="item-wrapper">
              <img src={telegram} alt="telegram" />
              <h3>Telegram</h3>
            </a>

            <a href={item.whatsapp} target="_blank" className="item-wrapper">
              <img src={whatsapp} alt="whatsapp" />
              <h3>Whatsapp </h3>
            </a>
          </div>
        </div>
      ))}

      <div className="developed">
        <span>Developed by Zeon 2022</span>
      </div>
    </div>
  );
};

export default Footer;
