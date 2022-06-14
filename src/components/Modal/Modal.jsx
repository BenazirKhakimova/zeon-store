import React, { useState } from "react";
import phone from "../../assets/icon/telephone.png";

const Modal = () => {
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <>
      <img src={phone} alt="" onClick={() => setModal2Visible(true)} />
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
  );
};

export default Modal;
