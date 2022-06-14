import { Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import FloatingButton from "../../../components/FloatingButtons/FloatingButton";
import ScrollToTopIntoPage from "../../../components/ScrollToTop/ScrollToTopIntoPage";
import { contextProduct } from "../../../context/productContext";

const Summer = () => {
  const { getProducts, products, productsCount } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      summer: "summer",
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <>
      <FloatingButton />
      <ScrollToTopIntoPage />
      <div className="container">
        <h2 id="title">Коллекция лето 2022</h2>
      </div>
      <div className="collection-grid container">
        {products.length > 0
          ? products.map((item) => <Card key={item.id} item={item} />)
          : null}
      </div>
      <div className="container pagination">
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </>
  );
};

export default Summer;
