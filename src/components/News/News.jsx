import React, { useContext, useEffect, useState } from "react";
import "./News.css";
import news1 from "../../assets/img/news/Rectangle 507.png";
import { contextProduct } from "../../context/productContext";
import { Empty } from "antd";
import axios from "axios";
const News = () => {
  const { news, getNews } = useContext(contextProduct);
  // const [tidings, setTidings] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);

  // useEffect(() => {
  //   console.log("fetching");
  //   axios
  //     .get(`http://localhost:8000/news?_limit=8&_page=${currentPage}`)
  //     .then((response) => setTidings(...news, ...response.data));
  //   setCurrentPage((prevState) => prevState + 1).finally(() =>
  //     setFetching(false)
  //   );
  // }, [fetching]);

  // // ?: слушатель события для документа при скролле
  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHendler);

  //   return function () {
  //     document.removeEventListener("scroll", scrollHendler);
  //   };
  // }, []);

  // // ?: функция для ленивой загрузки
  // const scrollHendler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     setFetching(true);
  //   }
  // };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="container">
        <h2 id="title">Новости</h2>
      </div>
      <div className="container news-body">
        {news.length > 0 ? (
          news.map((item) => (
            <div className="news-box-wrapper">
              <div className="news-box">
                <img src={item.img} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Empty />
          </div>
        )}
      </div>
    </>
  );
};

export default News;
