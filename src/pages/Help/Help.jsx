import React, { useContext, useEffect, useState } from "react";

import "./Help.css";
import img from "../../assets/img/Rectangle 684.png";
import arrow from "../../assets/icon/acc-arrow.png";
import { contextProduct } from "../../context/productContext";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
const Help = () => {
  const { data, getData } = useContext(contextProduct);

  useEffect(() => {
    getData();
  }, []);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <>
      <BreadCrumb />
      <div className="container help-wrapper">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="accordion-wrapper">
          <div className="accordion">
            {data.map((item, i) => (
              <div key={item.id} className="items">
                <div className="title" onClick={() => toggle(i)}>
                  <h3>{item.question}</h3>
                  {selected === i ? (
                    <img className="no-rotate" src={arrow} alt="" />
                  ) : (
                    <img className="rotate" src={arrow} alt="" />
                  )}
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
