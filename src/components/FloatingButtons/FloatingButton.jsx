import React, { useState } from "react";
import "./FloatingButton.css";
import ExitIcon from "../../assets/icon/call back.png";
import ChatIcon from "../../assets/icon/call back (1).png";
import MoveUpIcon from "../../assets/icon/up.png";
import TelegramIcon from "../../assets/icon/telegram (1).png";
import WhatsAppIcon from "../../assets/icon/whatsapp (1).png";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import TelephoneIcon from "../../assets/icon/telephone.png";

import { useFormik } from "formik";

import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import check from "../../assets/icon/check.png";
const MoveUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Заполните поле!";
  } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.firstName)) {
    errors.firstName = "Введите Ваше имя пожалуйста!";
  }

  if (!values.phone) {
    errors.phone = "Заполните поле";
  } else if (
    !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)
  ) {
    errors.phone = "Введите Ваш номер пожалуйста! ";
  }
  return errors;
};

function FloatingButton() {
  const [open, setOpen] = useState(true);
  const { contacts, postCallBack } = useContext(contextProduct);
  const novigate = useNavigate();

  // modal
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      postCallBack(values, null, 2);
    },
  });

  let styleVisible = {
    visibility: "visible",
  };

  const visibleSecondModal = () => {
    setTimeout(() => {
      setModal2Visible(true);
    }, 700);
  };
  return (
    <div className="container floating-button-wrapper">
      <div id="float-buttons">
        {open ? (
          <>
            <div>
              <img id="move-up" src={MoveUpIcon} onClick={() => MoveUp()} />
            </div>
            <div>
              <img id="chat" src={ChatIcon} onClick={() => setOpen(false)} />
            </div>
          </>
        ) : (
          contacts.map((item) => (
            <div key={item.id}>
              <div className="open-btn">
                <div id="up">
                  <img src={MoveUpIcon} onClick={() => MoveUp()} />
                </div>
                <div className="icons-wrapper">
                  <img
                    src={TelephoneIcon}
                    alt=""
                    onClick={() => setModal1Visible(true)}
                  />

                  <a target="_blank" href={item.telegram}>
                    <img src={TelegramIcon} alt="" />
                  </a>
                  <a target="_blank" href={item.whatsapp}>
                    <img src={WhatsAppIcon} alt="" />
                  </a>

                  <img
                    id="close"
                    src={ExitIcon}
                    alt=""
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="modal">
                <Modal
                  centered
                  visible={modal1Visible}
                  onOk={() => setModal1Visible(false)}
                  onCancel={() => setModal1Visible(false)}
                  footer={null}
                  className="first-modal"
                  style={styleVisible}
                >
                  <form className="fb-modal" onSubmit={formik.handleSubmit}>
                    <div className="modal-text">
                      <h3>Если у Вас остались вопросы</h3>
                      <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                    </div>

                    <div className="modal-inp">
                      <input
                        className="first-inp placeholder type"
                        type="text"
                        placeholder="Как к Вам обращаться?"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                      {formik.errors.firstName ? (
                        <div className="error">{formik.errors.firstName}</div>
                      ) : null}

                      <input
                        className="second-inp placeholder type"
                        type="text"
                        placeholder="Номер телефона"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                      {formik.errors.phone ? (
                        <div className="error">{formik.errors.phone}</div>
                      ) : null}

                      {formik.errors.phone ? (
                        <button
                          disabled="disabled"
                          type="button"
                          className="btn-modal btn-1"
                        >
                          Заказать Звонок
                        </button>
                      ) : formik.errors.firstName ? (
                        <button
                          disabled="disabled"
                          type="button"
                          className="btn-modal btn-1"
                        >
                          Заказать Звонок
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={() => {
                            setModal1Visible(false);
                            visibleSecondModal();
                          }}
                          className="btn-modal btn-2"
                        >
                          Заказать Звонок
                        </button>
                      )}
                    </div>
                  </form>
                </Modal>
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
                  onCancel={() => setModal2Visible(false)}
                  footer={null}
                  className="second-modal-wrapper"
                >
                  <div className="second-modal">
                    <img src={check} alt="check" />
                    <div className="titles-wrapper">
                      <h3 className="fb-title">Спасибо!</h3>
                      <h3 className="fb-sub-title">
                        Ваша заявка была принята ожидайте, скоро Вам перезвонят
                      </h3>
                    </div>

                    <Link to={novigate - 1}>
                      <button className="btn-modal btn-3">
                        Продолжить покупки
                      </button>
                    </Link>
                  </div>
                </Modal>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FloatingButton;
