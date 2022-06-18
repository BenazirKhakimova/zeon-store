import { Breadcrumb } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { contextProduct } from "../../context/productContext";

const IntoPage = () => {
  const { products, getProducts } = useContext(contextProduct);
  // console.log(products[0].collections, "products");
  const params = useParams();
  useEffect(() => {
    getProducts();
  }, [params.id]);
  const { pathname } = useLocation();
  return (
    <div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item className="breadcrumb">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb">
          <Link to="/collections">Коллекции</Link>
        </Breadcrumb.Item>
        {products.map((item) => (
          <Breadcrumb.Item key={item.id} className="breadcrumb">
            {item.collections.map((col) => (
              <a href="#">{col.collectionName}</a>
            ))}
          </Breadcrumb.Item>
        ))}
        {/* {pathname === `/ditails/${item.id}` ? (
                  <Breadcrumb.Item key={item.id} className="breadcrumb">
                    <a href="#">{item.name}</a>
                  </Breadcrumb.Item>
                ) : null} */}
      </Breadcrumb>
    </div>
  );
};

export default IntoPage;
