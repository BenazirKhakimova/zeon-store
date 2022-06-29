import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import "./DitailsProduct.css";
import { contextProduct } from "../../context/productContext";
import cart from "../../assets/icon/cart.png";
import deactivated from "../../assets/icon/ditailse-like(2).png";
import activated from "../../assets/icon/ditails-like.png";
import { favouritesContext } from "../../context/favouritesContext";
import FancyboxDitails from "./FancyboxDitails";
import IntoPage from "../../components/BreadCrumb/IntoPage";
import { cartContext } from "../../context/cartContext";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import OneProductCarousel from "./OneProductCarousel";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import SimilarCarousel from "../../components/CardCarousel/SimilarCarousel";

const DitailsProduct = () => {
  const {
    oneProduct,
    getOneProduct,
    products,
    getProducts,
    handleChangeColor,
    cartProduct,
  } = useContext(contextProduct);
  const { addProductToFavourites, deleteItemFromFavourites } =
    useContext(favouritesContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [visibleFav, setVisibleFav] = useState(false);
  const [selected, setSelected] = useState(oneProduct?.currentColor);
  const [goToCart, setGoToCart] = useState(false);
  const [addToCart, setAddToCart] = useState(true);
  const [checkItem, setCheckItem] = useState(
    checkProductInCart(cartProduct.id, cartProduct.currentColor)
  );
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const loadingTimer = (product) => {
    if (product?.currentColor) {
      setSelected(product.currentColor);
      setTimeout(() => setisLoading(false), 800);
    }
  };

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    loadingTimer(oneProduct);
  }, [oneProduct]);

  let res;
  products.map((item) => {
    if (item.discaunt) {
      res = Math.ceil((item.price / 100) * item.discaunt);
    }
  });

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <IntoPage />
      {oneProduct ? (
        <>
          <div className="wrap container">
            <div className="one-product-slider">
              <FancyboxDitails />
            </div>

            <div className="container one-product-carousel">
              <OneProductCarousel />
            </div>

            <div className="info">
              <div className="innerInfo">
                <h1 className="productTitle">{oneProduct.name}</h1>
                <div className="article">
                  <span className="subTitle">Артикул: </span>
                  <span className="text">{oneProduct.articul}</span>
                </div>
                <div className="colorWrapper">
                  <div className="colors">
                    <span className="subTitle">Цвет:</span>
                    {/* -------------------------------------------------------------- */}
                    {oneProduct.colors.map((color) => (
                      <div
                        key={oneProduct.id + color.color}
                        onClick={() => {
                          setSelected(color.color);
                          setCheckItem(
                            checkProductInCart(
                              cartProduct.id,
                              cartProduct.currentColor
                            )
                          );
                          setGoToCart(false);
                          setAddToCart(true);
                        }}
                        className={
                          selected === color.color
                            ? "selected-btn"
                            : "unselected-btn"
                        }
                      >
                        <div
                          onClick={(e) => {
                            handleChangeColor(e);
                          }}
                          id={color.color}
                          className="size-circle"
                        ></div>
                      </div>
                    ))}
                    {/* -------------------------------------------------------------- */}
                  </div>
                </div>
                {oneProduct.discaunt ? (
                  <div className="sumWrapper">
                    <span className="sum">{res + " р"} </span>
                    <span className="sumOld">{oneProduct.price + " р"}</span>
                  </div>
                ) : (
                  <div className="sumWrapper">
                    <span className="sum">{oneProduct.price + " p"}</span>
                  </div>
                )}
                <div>
                  <h3 className="about-product">О товаре:</h3>
                  <span className="product-description">
                    {oneProduct.description}
                  </span>
                  <div className="extra">
                    <div>
                      <span className="subTitle">Размерный ряд: </span>
                      <span>{oneProduct.size}</span>
                    </div>
                    <div>
                      <span className="subTitle">Состав ткани: </span>
                      <span>{oneProduct.fabricComposition}</span>
                    </div>
                    <div>
                      <span className="subTitle">Количество в линейке: </span>
                      <span>{oneProduct.countInLine}</span>
                    </div>
                    <div>
                      <span className="subTitle">Материал: </span>
                      <span>{oneProduct.material}</span>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  {!checkItem && addToCart ? (
                    <button
                      onClick={(e) => {
                        cartProduct.id
                          ? addProductToCart(cartProduct)
                          : addProductToCart(oneProduct);
                        setCheckItem(
                          checkProductInCart(
                            cartProduct.id,
                            cartProduct.currentColor
                          )
                        );
                        setGoToCart(true);
                        setAddToCart(false);
                      }}
                      className="addCart"
                    >
                      <img src={cart} alt="deactivated" />
                      Добавить в корзину
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        navigate("/cart");
                        setGoToCart(false);
                      }}
                      className="goCart"
                    >
                      <img src={cart} alt="deactivated" />
                      Перейти в корзину
                    </button>
                  )}

                  {visibleFav ? (
                    <button
                      onClick={() => {
                        deleteItemFromFavourites(oneProduct.id);
                        setVisibleFav(false);
                      }}
                      className="addFavorite"
                    >
                      <img src={activated} alt="activated" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        addProductToFavourites(oneProduct);
                        setVisibleFav(true);
                      }}
                      className="addFavorite"
                    >
                      <img width={"24px"} src={deactivated} alt="activated" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h2 id="centered">Похожие товары</h2>
            <div className="flex">
              {products.slice(0, 5).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            <div className="container card-carousel-wrapper">
              <SimilarCarousel />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DitailsProduct;
