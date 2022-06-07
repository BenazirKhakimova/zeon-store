import React from "react";
import { Breadcrumb } from "antd";
import "./BreadCrumb.css";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  return (
    <div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item className="breadcrumb">Home /</Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb">
          <a className="breadcrumb" href="">
            {}
            {location.pathname.slice(1, location.pathname.length)}
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
