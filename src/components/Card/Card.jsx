import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  let res;
  if (item.discaunt) {
    res = (item.price % 100) * item.discaunt;
  }

  return (
    <div className="container">
      <div className="card">
        <Link to={"/ditails/:id"}>
          <img id="img-rel" src={item.image1} alt="" />
        </Link>
        {/* <img id="img-fav" src={fav} alt="" /> */}
        <div className="card-footer">
          <span>{item.name}</span>

          <div>
            {item.discaunt ? (
              <div id="price-wrapper">
                <span id="price">{res + " p"}</span>
                <span id="discount">{item.price + " p"}</span>
              </div>
            ) : (
              <span id="price">{item.price + " p"}</span>
            )}
          </div>
          <span id="size">{item.size}</span>
          <div className="color-wrapper">
            <div id={`${item.color1}`} className="size-circle"></div>
            <div id={`${item.color2}`} className="size-circle"></div>
            <div id={`${item.color3}`} className="size-circle"></div>
            <div id={`${item.color4}`} className="size-circle"></div>
            <div id={`${item.color5}`} className="size-circle"></div>
            <div id={`${item.color6}`} className="size-circle"></div>
            <div id={`${item.color7}`} className="size-circle"></div>
            <div id={`${item.color8}`} className="size-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
