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

import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

const MoveUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function FloatingButton() {
  const [open, setOpen] = useState(true);
  const { contacts } = useContext(contextProduct);
  const novigate = useNavigate();
  // modal
  const [modal2Visible, setModal2Visible] = useState(false);
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
                    onClick={() => setModal2Visible(true)}
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
              <>
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
                  onCancel={() => setModal2Visible(false)}
                  footer={null}
                >
                  <div className="modal-text">
                    <h3>Если у Вас остались вопросы</h3>
                    <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                  </div>

                  <div className="modal-inp">
                    <input
                      className="first-inp placeholder type"
                      type="text"
                      placeholder="Как к Вам обращаться?"
                    />
                    {/* <p>В полях дожны присутсвовать буквы!</p> */}
                    <input
                      className="second-inp placeholder type"
                      type="text"
                      placeholder="Номер телефона"
                    />
                    {/* <p>В полях дожны присутсвовать числа!</p> */}
                    <button className="btn-modal btn-1">Заказать Звонок</button>
                    {/* <button className="btn-modal btn-2">Заказать Звонок</button>
                    <Link to={novigate - 1}>
                      <button className="btn-modal btn-2">
                        Продолжить покупки
                      </button>
                    </Link> */}
                  </div>
                </Modal>
              </>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FloatingButton;
