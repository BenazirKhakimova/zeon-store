import React, { useContext, useEffect } from "react";
import cl from "../styles/Product.module.scss";
import { useParams } from "react-router-dom";

import "./DitailsProduct.css";
import { contextProduct } from "../../context/productContext";
const DitailsProduct = () => {
  const { oneProduct, getOneProduct } = useContext(contextProduct);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  return (
    // <Template>
    <>
      <div className="wrap">
        <div className="sliderImages">
          {/* {!isLoading ?
                        <SliderImages store={ProductDetail}/>
                        :
                        null
                    } */}
        </div>
        <div className="images">
          {oneProduct.length > 0
            ? oneProduct.map((item) => (
                <div key={item.id}>
                  <img src={item.imag1} alt="" />
                  <img src={item.imag2} alt="" />
                  <img src={item.imag3} alt="" />
                  <img src={item.imag4} alt="" />
                  <img src={item.imag5} alt="" />
                  <img src={item.imag6} alt="" />
                  <img src={item.imag7} alt="" />
                  <img src={item.imag8} alt="" />
                </div>
              ))
            : null}
        </div>
        {oneProduct.length > 0
          ? oneProduct.map((item) => (
              <div className="info">
                <div className="innerInfo">
                  <h1 className="productTitle">Вечернее платье</h1>
                  <div className="article">
                    <span className="subTitle">Артикул: </span>
                    <span className="text">Платье PL984/dakota</span>
                  </div>
                  <div className="colorWrapper">
                    <span className="subTitle">Цвет: </span>
                    <div className="colors">
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
                  <div className={cl.sumWrapper}>
                    <span className={cl.sum}>7229 с </span>
                    <span className={cl.sumOld}>7229 с</span>
                  </div>
                  <h3 className={cl.subTitle}>О товаре</h3>
                  <span className={cl.content}>
                    За последние 35 лет бренд Bonucci из обычного производителя
                    одежды превратился в широко узнаваемую марку, а его
                    продукция – в синоним высокого качества и актуального стиля.{" "}
                  </span>
                  <div className={cl.extra}>
                    <div>
                      <span className={cl.subTitle}>Размерный ряд: </span>
                      <span>42-50</span>
                    </div>
                    <div>
                      <span className={cl.subTitle}>Состав ткани: </span>
                      <span>Полиэстер</span>
                    </div>
                    <div>
                      <span className={cl.subTitle}>
                        Количество в линейке:{" "}
                      </span>
                      <span>5</span>
                    </div>
                    <div>
                      <span className={cl.subTitle}>Материал: </span>
                      <span>Полиэстер</span>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="addCart">Добавить в корзину</button>
                    {/* <ProductCartSVG style={{width: 20, height: 20, fill: '#fff'}}/> */}
                    {/* <LoveSVG style={{fill: '#fff'}}/> */}
                    <button className="addFavorite"></button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      {/* <h1 className={cl.title}>Похожие товары</h1>
      <div className={cl.slider}>
        <SliderProducts store={Bestsellers}/>
      </div> */}
    </>
    // </Template>
  );
};

export default DitailsProduct;
