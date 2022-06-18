import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "antd";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import "./DitailsProduct.css";
import { contextProduct } from "../../context/productContext";
import cart from "../../assets/icon/cart.png";
import deactivated from "../../assets/icon/ditailse-like(2).png";
import activated from "../../assets/icon/ditails-like.png";
import IntoPage from "../../components/BreadCrumb/IntoPage";
import { favouritesContext } from "../../context/favouritesContext";

const DitailsProduct = () => {
  const { oneProduct, getOneProduct, products } = useContext(contextProduct);
  // console.log(oneProduct.id, "one");
  const {
    addProductToFavourites,
    checkItemInFavourites,
    deleteItemFromFavourites,
  } = useContext(favouritesContext);
  // const [checkProduct, setCheckProduct] = useState(
  //   checkItemInFavourites(oneProduct.id)
  // );
  const [visible, setVisible] = useState(false);
  const [visibleFav, setVisibleFav] = useState(false);
  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  let res;
  products.map((item) => {
    if (item.discaunt) {
      res = (item.price % 100) * item.discaunt;
    }
  });

  return (
    <>
      {/* <IntoPage /> */}
      {oneProduct ? (
        <div className="wrap container">
          <div className="sliderImages">
            {/* {!isLoading ?
                        <SliderImages store={ProductDetail}/>
                        :
                        null
                    } */}
          </div>
          <div className="images">
            <div key={oneProduct.id}>
              <img
                src={oneProduct.image1}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>
            <div>
              <img
                src={oneProduct.image2}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image3}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image4}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image5}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image6}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image7}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>

            <div>
              <img
                src={oneProduct.image8}
                onClick={() => setVisible(true)}
                alt=""
              />
            </div>
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
                  <div id={oneProduct.color1} className="size-circle"></div>
                  <div id={oneProduct.color2} className="size-circle"></div>
                  <div id={oneProduct.color3} className="size-circle"></div>
                  <div id={oneProduct.color4} className="size-circle"></div>
                  <div id={oneProduct.color5} className="size-circle"></div>
                  <div id={oneProduct.color6} className="size-circle"></div>
                  <div id={oneProduct.color7} className="size-circle"></div>
                  <div id={oneProduct.color8} className="size-circle"></div>
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
                <button className="addCart">
                  <img width={"20px"} src={cart} alt="deactivated" />
                  Добавить в корзину
                </button>

                {visibleFav ? (
                  <button
                    onClick={() => {
                      deleteItemFromFavourites(oneProduct.id);
                      setVisibleFav(false);
                    }}
                    className="addFavorite"
                  >
                    <img width={"24px"} src={activated} alt="activated" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      addProductToFavourites(oneProduct);
                      // setCheckProduct(checkItemInFavourites(oneProduct.id));
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
          <Modal
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={"100%"}
            footer={null}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={`${oneProduct.image1}:id`} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${oneProduct.image2}`} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${oneProduct.image3}:id`} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oneProduct.image4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oneProduct.image5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oneProduct.image6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oneProduct.image7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oneProduct.image8} alt="" />
              </SwiperSlide>
            </Swiper>
          </Modal>
        </div>
      ) : null}
      {/* <h1 className={cl.title}>Похожие товары</h1>
      <div className={cl.slider}>
        <SliderProducts store={Bestsellers}/>
      </div> */}
    </>
    // </Template>
  );
};

export default DitailsProduct;
