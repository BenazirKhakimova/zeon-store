import React from "react";
import "./Card.css";
import { Link, useLocation } from "react-router-dom";
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

  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(item.currentColor);
  const [img, setImg] = useState(item.image1);
  const [hover, setHover] = useState("first");
  const [checkProduct, setCheckProduct] = useState(
    checkItemInFavourites(item.id)
  );

  let res;
  if (item.discaunt) {
    res = Math.ceil((item.price / 100) * item.discaunt);
  }

  const handleMove = (e) => {
    let offsetX = e.nativeEvent.offsetX;
    let imgWidth = e.target.clientWidth;
    let specWidth = Math.ceil(imgWidth / 6);

    if (offsetX > 1 && offsetX < specWidth) {
      setImg(item.image6);
      setHover("second");
    } else if (offsetX > specWidth && offsetX < specWidth * 2) {
      setImg(item.image5);
      setHover("third");
    } else if (offsetX > specWidth * 2 && offsetX < specWidth * 3) {
      setImg(item.image3);
      setHover("fourth");
    } else if (offsetX > specWidth * 3 && offsetX < specWidth * 4) {
      setImg(item.image4);
      setHover("fifth");
    } else if (offsetX > specWidth * 4 && offsetX < specWidth * 5) {
      setImg(item.image2);
      setHover("sixth");
    } else if (offsetX > specWidth * 5 && offsetX < specWidth * 6) {
      setImg(item.image6);
      setHover("seventh");
    }
  };

  const handleLeave = () => {
    setImg(item.image1);
    setHover("first");
  };

  return (
    <div className="container">
      <div className="card">
        <Link to={`/ditails/${item.id}`}>
          <img
            id="img-rel"
            onMouseMove={(e) => {
              handleMove(e);
            }}
            onMouseLeave={() => {
              handleLeave();
            }}
            src={img}
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
        <div className={hover}></div>
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
          <span id="size">{"Размер: " + item.size}</span>

          {/* ************************************************************** */}
          <div className="color-wrapper">
            {item.colors.map((color) => (
              <div
                key={item.id + color.color}
                onClick={() => {
                  setSelected(color.color);
                }}
                className={
                  selected === color.color ? "activeColor" : "inActiveColor"
                }
              >
                <div id={color.color} className="size-circle"></div>
              </div>
            ))}
            {/* ************************************************************** */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
