import React from "react";
import "./Card.css";
import img1 from "../../../src/assets/img/new/Rectangle 491.png";
import { Link } from "react-router-dom";
import fav from "../../../src/assets/icon/favourites.png";
const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="card">
        <Link to={"./details/:id"}>
          <img id="img-rel" src={img1} alt="" />
        </Link>
        <img id="img-fav" src={fav} alt="" />
        <div className="card-footer">
          <span>Вечернее платье</span>

          <div id="price-wrapper">
            <span id="price">1 365 р </span>
            <span id="discount"> 2 730 c.</span>
          </div>
          <span id="size">Размер: 42-50</span>
          <div className="color-wrapper">
            <div className="color-1 size-circle"></div>
            <div className="color-2 size-circle"></div>
            <div className="color-3 size-circle"></div>
            <div className="color-4 size-circle"></div>
            <div className="color-5 size-circle"></div>
            <div className="color-6 size-circle"></div>
            <div className="color-7 size-circle"></div>
            <div className="color-8 size-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
