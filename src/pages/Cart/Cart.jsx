// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./Cart.css";
import minus from "../../assets/icon/minus.png";
import plus from "../../assets/icon/plus.png";
import { CloseOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import { useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import CartModal from "../../components/CartModal/CartModal";
function Cart() {
  const { getProducts, products } = useContext(contextProduct);
  const { cart, getCart, cartLength, deleteProductfromCart, countOfProduct } =
    useContext(cartContext);

  useEffect(() => {
    getProducts();
    getCart();
  }, []);
  const navigate = useNavigate();
  let discount = 0;
  cart?.products?.map((item) =>
    item.productDiscount
      ? (discount += item.product.price - item.count * item.productDiscount)
      : 0
  );
  return (
    <div>
      <BreadCrumb />
      {cartLength > 0 ? (
        <div className="container busket-wrapper">
          <div className="busket-product-wrapper">
            {cart?.products?.map((item) => (
              <div key={item.product.id} className="busket-product">
                <div
                  onClick={() => navigate(`/ditails/${item.product.id}`)}
                  className="busket-left"
                >
                  <img src={item.product.currentImg} alt="" />
                </div>
                <div className="busket-right">
                  <div className="busket-title">
                    <p>{item.product.name}</p>
                    <CloseOutlined
                      onClick={() => {
                        deleteProductfromCart(
                          item.product.id,
                          item.product.currentColor
                        );
                      }}
                    />
                  </div>
                  <div
                    className="busket-info"
                    onClick={() => navigate(`/ditails/${item.product.id}`)}
                  >
                    <div>
                      <p className="sub-title">
                        {"Рамер: " + item.product.size}
                      </p>
                    </div>

                    <div className="busket-color-wrapper">
                      <p className="sub-title">Цвет:</p>
                      <div className="busket-color">
                        <div
                          id={item.product.currentColor}
                          className="size-circle"
                        ></div>
                      </div>
                    </div>

                    <div>
                      {item.product.discaunt ? (
                        <div id="price-wrapper">
                          <span id="busket-price">
                            {Math.ceil(
                              (item.product.price / 100) * item.product.discaunt
                            ) + "р"}{" "}
                          </span>
                          <span id="busket-discount">
                            {item.product.price + "р"}
                          </span>
                        </div>
                      ) : (
                        <span id="busket-price">
                          {item.product.price + " p"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="busket-counter">
                    <div>
                      <button
                        onClick={() =>
                          countOfProduct(
                            (item.count -= 1),
                            item.product.currentColor,
                            item.product.id
                          )
                        }
                      >
                        <img src={minus} alt="" />
                      </button>
                    </div>

                    <div>
                      <p>{item.count}</p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          countOfProduct(
                            (item.count += 1),
                            item.product.currentColor,
                            item.product.id
                          )
                        }
                      >
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="busket">
            <div className="busket-items">
              <div>
                <div>
                  <p id="sum">Сумма заказа</p>
                </div>
                <div className="busket-item">
                  <p className="left-side">Количество линеек: </p>
                  <p className="right-side">{cart?.totalCount + " шт"}</p>
                </div>
                <div className="busket-item">
                  <p className="left-side">Количество товаров: </p>
                  <p className="right-side">{5 * cart?.totalCount + " шт"}</p>
                </div>
                <div className="busket-item">
                  <p className="left-side">Стоимость:</p>
                  <p className="right-side">{cart?.totalPrice + " рублей"}</p>
                </div>
                <div className="busket-item">
                  <p className="left-side">Скидка: </p>
                  <p className="right-side">{discount + " рублей"}</p>
                </div>
                <div id="dashed"></div>
                <div className="busket-item">
                  <p className="left-side">Итого к оплате: </p>
                  <p className="right-side">
                    {cart?.totalPrice - discount + " рублей"}
                  </p>
                </div>
                <CartModal />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 id="title">Корзина</h2>
          <p className="busket-subtitle">У вас пока нет товаров в корзине</p>
          <div>
            <h2 id="title">Возможно Вас заинтересует</h2>
            <div className="flex">
              {products.slice(0, 5).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
