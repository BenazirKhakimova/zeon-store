// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <div>
      <div className="container busket-wrapper">
        <div className="busket">
          <div className="busket-items">
            <div>
              <div className="busket-item">
                <p>Количество линеек: </p>
                <p>7шт</p>
              </div>
              <div className="busket-item">
                <p>Количество товаров: </p>
                <p>35шт</p>
              </div>
              <div className="busket-item">
                <p>Стоимость:</p>
                <p>13595 рублей</p>
              </div>
              <div className="busket-item">
                <p>Скидка: </p>
                <p>1 270 рублей</p>
              </div>
              <div id="innert"></div>
              <div className="busket-item">
                <p>Итого к оплате: </p>
                <p>12 325 рублей</p>
              </div>
            </div>
            <div className="check-out-btn">
              <button>Оформление заказа</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
