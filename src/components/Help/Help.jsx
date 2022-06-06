import React from "react";
import { data } from "../../helpers/data";

import "./Help.css";
import img from "../../assets/img/Rectangle 684.png";
import arrow from "../../assets/icon/acc-arrow.png";
const Help = () => {
  return (
    <div className="container help-wrapper">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="accordion-wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="items">
              <div className="title">
                <h3>{item.question}</h3>
                <img src={arrow} alt="" />
              </div>
              <div className="content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
