// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./Cart.css";
import img from "../../assets/img/about us/img3.png";
import minus from "../../assets/icon/minus.png";
import plus from "../../assets/icon/plus.png";
import { CloseOutlined } from "@ant-design/icons";
function Cart() {
  return (
    <div>
      <BreadCrumb />
      <div className="container">
        <h2 id="title">Корзина</h2>
      </div>

      <div className="container busket-wrapper">
        <div className="busket-product">
          <div className="busket-left">
            <img src={img} alt="" />
          </div>
          <div className="busket-right">
            <div className="busket-title">
              <p>Вечернее платье</p>
              <CloseOutlined />
            </div>
            <div className="busket-info">
              <div>
                <p className="sub-title">Рамер: 42-50</p>
              </div>

              <div className="busket-color-wrapper">
                <p className="sub-title">Цвет:</p>
                <div className="busket-color">
                  <div></div>
                </div>
              </div>

              <div>
                {/* {item.discaunt ? ( */}
                <div id="price-wrapper">
                  <span id="busket-price">1 365 p</span>
                  <span id="busket-discount">1 765 p</span>
                </div>
                {/* ) : (
                 <span id="busket-price">{item.price + " p"}</span>
                 )} */}
              </div>

              <div className="busket-counter">
                <button>
                  <img src={minus} alt="" />
                </button>
                <div>
                  <p>1</p>
                </div>

                <button>
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="busket">
          <div className="busket-items">
            <div>
              <div>
                <p id="sum">Сумма заказа</p>
              </div>
              <div className="busket-item">
                <p className="left-side">Количество линеек: </p>
                <p className="right-side">7шт</p>
              </div>
              <div className="busket-item">
                <p className="left-side">Количество товаров: </p>
                <p className="right-side">35шт</p>
              </div>
              <div className="busket-item">
                <p className="left-side">Стоимость:</p>
                <p className="right-side">13595 рублей</p>
              </div>
              <div className="busket-item">
                <p className="left-side">Скидка: </p>
                <p className="right-side">1 270 рублей</p>
              </div>
              <div id="innert"></div>
              <div className="busket-item">
                <p className="left-side">Итого к оплате: </p>
                <p className="right-side">12 325 рублей</p>
              </div>
              <div className="check-out-btn">
                <button>Оформление заказа</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <p className="busket-subtitle">У вас пока нет товаров в корзине</p>
        <div>
          <h2 id="title">Возможно Вас заинтересует</h2>
        </div>
      </div> */}
    </div>
  );
}
export default Cart;
