import React from "react";
import footerLogo from "../../../src/assets/img/footer-logo.png";
import instagram from "../../../src/assets/icon/instagram.png";
import telegram from "../../../src/assets/icon/telegram.png";
import whatsapp from "../../../src/assets/icon/whatsapp.png";
import phone from "../../../src/assets/icon/phone.png";
import mail from "../../../src/assets/icon/gmail.png";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container footer-items-wrapper">
        <Link to={"/"}>
          <img src={footerLogo} alt="logo" />
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
          <a href="tel:+996 500 123 456" className="item-wrapper">
            <img src={phone} alt="phone" />
            <h3>+996 500 123 456</h3>
          </a>
          <a href="tel:+996 500 123 456" className="item-wrapper">
            <img src={phone} alt="phone" />
            <h3>+996 500 123 456</h3>
          </a>
          <a href="mailto:zeonithub@gmail.com" className="item-wrapper">
            <img src={mail} alt="mail" />
            <h3>mail@gmail.com</h3>
          </a>
        </div>

        <div className="footer-item">
          <h2 id="first-child">Мы в социальных сетях</h2>
          <a
            href="https://www.instagram.com/zeon.ithub/?hl=en"
            target="_blank"
            className="item-wrapper"
          >
            <img src={instagram} alt="" />
            <h3>Instagram</h3>
          </a>
          <a
            href="https://t.me/Zeonitcommunity"
            target="_blank"
            className="item-wrapper"
          >
            <img src={telegram} alt="telegram" />
            <h3>Telegram</h3>
          </a>
          <div className="item-wrapper">
            <img src={whatsapp} alt="whatsapp" />
            <h3>Whatsapp </h3>
          </div>
        </div>
      </div>
      <div className="developed">
        <span>Developed by Zeon 2022</span>
      </div>
    </div>
  );
};

export default Footer;
