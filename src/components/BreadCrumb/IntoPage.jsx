import { Breadcrumb } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";

const IntoPage = () => {
  const { products, getProducts, collections } = useContext(contextProduct);
  const params = useParams();
  useEffect(() => {
    getProducts();
  }, [params.id]);
  const { pathname } = useLocation();

  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb">
            <Link to="/">Главное</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb">
            <Link to="/collection">Коллекции</Link>
          </Breadcrumb.Item>
         {products.map((item) => (
            <>
              <Breadcrumb.Item key={item.id} className="breadcrumb">
                {pathname === `/ditails/${item.id}` ? (
                  <Link to="">{item.colName}</Link>
                ) : null}
              </Breadcrumb.Item>
              <Breadcrumb.Item key={item.id} className="breadcrumb">
                {pathname === `/ditails/${item.id}` ? (
                  <a href="#">{item.name}</a>
                ) : null}
              </Breadcrumb.Item>
            </>
          ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default IntoPage;
