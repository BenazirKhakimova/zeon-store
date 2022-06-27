import React from "react";
import "./SmallCard.css";
import { Link } from "react-router-dom";
import fav from "../../assets/icon/favourites.png";
import favActive from "../../assets/icon/favourites1.png";
import discount from "../../assets/icon/discount.png";
import { useState } from "react";
import { useContext } from "react";
import { favouritesContext } from "../../context/favouritesContext";

const SmallCard = ({ item }) => {
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
  const [selected, setSelected] = useState(item.currentColor);
  const [image, setImage] = useState(item.image1);
  const [hoverEffect, setHoverEffect] = useState("first");

  const handleMove = (e) => {
    let offsetX = e.nativeEvent.offsetX;
    let imgWidth = e.target.clientWidth;
    let specWidth = Math.ceil(imgWidth / 6);

    if (offsetX > 1 && offsetX < specWidth) {
      setImage(item.image6);
      setHoverEffect("second");
    } else if (offsetX > specWidth && offsetX < specWidth * 2) {
      setImage(item.image5);
      setHoverEffect("third");
    } else if (offsetX > specWidth * 2 && offsetX < specWidth * 3) {
      setImage(item.image3);
      setHoverEffect("fourth");
    } else if (offsetX > specWidth * 3 && offsetX < specWidth * 4) {
      setImage(item.image4);
      setHoverEffect("fifth");
    } else if (offsetX > specWidth * 4 && offsetX < specWidth * 5) {
      setImage(item.image2);
      setHoverEffect("sixth");
    } else if (offsetX > specWidth * 5 && offsetX < specWidth * 6) {
      setImage(item.image6);
      setHoverEffect("seventh");
    }
  };

  const handleLeave = () => {
    setImage(item.image1);
    setHoverEffect("first");
  };

  return (
    <div className="container">
      <div className="card-small">
        <Link to={`/ditails/${item.id}`}>
          <img
            onMouseMove={(e) => handleMove(e)}
            onMouseLeave={handleLeave()}
            id="img-rel-small"
            src={image}
            alt="Clothes"
          />
        </Link>
        {item.discaunt ? (
          <>
            <img id="img-discount-small" src={discount} alt="" />
            <p id="discount-title-small">{item.discaunt + "%"}</p>
          </>
        ) : null}

        {checkProduct && visible ? (
          <img
            id="img-fav-active-small"
            onClick={() => {
              deleteItemFromFavourites(item.id);
              setVisible(false);
            }}
            src={favActive}
            alt=""
          />
        ) : (
          <img
            id="img-fav-small"
            src={fav}
            onClick={() => {
              addProductToFavourites(item);
              setCheckProduct(checkItemInFavourites(item.id));
              setVisible(true);
            }}
            alt=""
          />
        )}
        <div>{hoverEffect}</div>
        <Link to={`/ditails/${item.id}`}>
          <div className="card-footer-small">
            <div>
              {item.discaunt ? (
                <div id="price-wrapper-small">
                  <span id="price-small">{res + " p"}</span>
                  <span id="discount-small">{item.price + " p"}</span>
                </div>
              ) : (
                <span id="price-small">{item.price + " p"}</span>
              )}
            </div>

            <span>{item.name}</span>

            <span id="size-small">{"Размер: " + item.size}</span>

            <div className="color-wrapper-small">
              {/* ************************************************************** */}
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
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
