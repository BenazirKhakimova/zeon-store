import React from "react";
import "./Advantages.css";
import money from "../../../src/assets/icon/money.png";
import truck from "../../../src/assets/icon/truck.png";
import support from "../../../src/assets/icon/support.png";
import shop2 from "../../../src/assets/icon/shop-2.png";
const Advantages = () => {
  return (
    <div className="container boxes-wrapper">
      <div className="advantages">
        <h2>Наши преимущества</h2>
      </div>
      <div className="boxes">
        <div className="wrapper">
          <div className="box">
            <img src={money} alt="money" />
            <span>Удобные способы оплаты</span>
            <span id="box-text">
              Мы предлагаем возможность безналичной оплаты
            </span>
          </div>
        </div>

        <div className="wrapper">
          <div className="box">
            <img src={truck} alt="truck" />
            <span>Cвоевремнная доставка</span>
            <span id="box-text">
              100% гарантия возврата товара - 14 дней на возврат, без скандалов
              и истерик.
            </span>
          </div>
        </div>

        <div className="wrapper">
          <div className="box">
            <img src={support} alt="support" />
            <span>Профессиональная консультация</span>
            <span id="box-text">
              Мы проконсультируем и индивидуально подойдем к Вашему заказу
            </span>
          </div>
        </div>

        <div className="wrapper">
          <div className="box">
            <img src={shop2} alt="shop" />
            <span>Акции и бонусы для покупателей</span>
            <span id="box-text">
              Промокоды со скидками для постоянных клиентов, акции на новые
              позиции
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
