import React from "react";
import { Breadcrumb } from "antd";
import "./BreadCrumb.css";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="container breadcrumb-wrapper">
          <Breadcrumb>
            {pathnames.length > 0 ? (
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            )}
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item>
                  <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
