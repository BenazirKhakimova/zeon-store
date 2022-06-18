import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import fav from "../../assets/icon/favourites.png";
import favActive from "../../assets/icon/favourites1.png";
import discount from "../../assets/icon/discount.png";
import { useState } from "react";
import { useContext } from "react";
import { favouritesContext } from "../../context/favouritesContext";

const Card = ({ item }) => {
  const {
    addProductToFavourites,
    checkItemInFavourites,
    deleteItemFromFavourites,
  } = useContext(favouritesContext);
  const [checkProduct, setCheckProduct] = useState(
    checkItemInFavourites(item.id)
  );
  let res;
  if (item.discaunt) {
    res = (item.price % 100) * item.discaunt;
  }
  const [visible, setVisible] = useState(true);
  const [activeColor, setActiveColor] = useState("blue");
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <div className="card">
        <Link to={`/ditails/${item.id}`}>
          <img
            id="img-rel"
            src={
              activeColor === "blue"
                ? item.image1
                : activeColor === "green"
                ? item.image2
                : activeColor === "grey"
                ? item.image3
                : activeColor === "brown"
                ? item.image4
                : activeColor === "darkBlue"
                ? item.image5
                : activeColor === "white"
                ? item.image6
                : activeColor === "black"
                ? item.image7
                : activeColor === "red"
                ? item.image8
                : null
            }
            alt="Clothes"
          />
        </Link>
        {item.discaunt ? (
          <>
            <img id="img-discount" src={discount} alt="" />
            <p id="discount-title">{item.discaunt + "%"}</p>
          </>
        ) : null}

        {checkProduct && visible ? (
          <img
            id="img-fav-active"
            onClick={() => {
              deleteItemFromFavourites(item.id);
              setVisible(false);
            }}
            src={favActive}
            alt=""
          />
        ) : (
          <img
            id="img-fav"
            src={fav}
            onClick={() => {
              addProductToFavourites(item);
              setCheckProduct(checkItemInFavourites(item.id));
              setVisible(true);
            }}
            alt=""
          />
        )}

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
            <div className={selected ? "activeColor" : null}>
              <div
                id={`${item.color1}`}
                onClick={() => {
                  setActiveColor("blue");
                  setSelected(true);
                }}
                className="size-circle"
              ></div>
            </div>

            <div className={selected ? activeColor : null}>
              <div
                id={`${item.color2}`}
                onClick={() => {
                  setActiveColor("blue");
                }}
                className="size-circle"
              ></div>
            </div>
            <div
              id={`${item.color3}`}
              onClick={() => setActiveColor("grey")}
              className="size-circle"
            ></div>
            <div
              id={`${item.color4}`}
              onClick={() => setActiveColor("brown")}
              className="size-circle"
            ></div>
            <div
              id={`${item.color5}`}
              onClick={() => setActiveColor("darkBlue")}
              className="size-circle"
            ></div>
            <div
              id={`${item.color6}`}
              onClick={() => setActiveColor("white")}
              className="size-circle"
            ></div>
            <div
              id={`${item.color7}`}
              onClick={() => setActiveColor("black")}
              className="size-circle"
            ></div>
            <div
              id={`${item.color8}`}
              onClick={() => setActiveColor("red")}
              className="size-circle"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
