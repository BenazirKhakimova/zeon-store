// import { useFormik } from "formik";
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import phone from "../../assets/icon/telephone.png";
import check from "../../assets/icon/check.png";
// import { contextProduct } from "../../context/productContext";
// import TelephoneIcon from "../../assets/icon/telephone.png";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Заполните поле!";
//   } else if (!/^[a-zA-Zа-яА-Я]+$/i.test(values.firstName)) {
//     errors.firstName = "Введите Ваше имя пожалуйста!";
//   }

//   if (!values.phone) {
//     errors.phone = "Заполните поле";
//   } else if (
//     !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)
//   ) {
//     errors.phone = "Введите Ваш номер пожалуйста! ";
//   }
//   return errors;
// };

// const Modal = () => {
//   const novigate = useNavigate();
//   const { contacts, postCallBack } = useContext(contextProduct);

//   // modal
//   const [modal1Visible, setModal1Visible] = useState(false);
//   const [modal2Visible, setModal2Visible] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       phone: "",
//     },
//     validate,
//     onSubmit: (values, { resetForm }) => {
//       postCallBack(values, null, 2);
//       resetForm({ values: "" });
//     },
//   });

//   let styleVisible = {
//     visibility: "visible",
//     width: "320px",
//   };

//   return (
//     <>
//       <div className="modal">
//         <img
//           src={TelephoneIcon}
//           alt=""
//           onClick={() => setModal1Visible(true)}
//         />
//         */}
//       </div>
//     </>
//   );
// };

// export default Modal;
