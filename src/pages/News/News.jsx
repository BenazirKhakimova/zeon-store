import React, { useEffect, useState } from "react";
import "./News.css";
import { Empty } from "antd";
import axios from "axios";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import Loading from "../../components/Loading/Loading";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { getProducts } = useContext(contextProduct);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const API = "http://localhost:8000/news";

  useEffect(() => {
    if (fetching) {
      axios
        .get(`${API}?_page=${currentPage}&_limit=8`)
        .then((res) => {
          setTotalCount(res.headers["x-total-count"]);
          setNews([...news, ...res.data]);
          setCurrentPage((currentPage) => currentPage + 1);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHendler);

    return function () {
      document.removeEventListener("scroll", scrollHendler);
    };
  }, [fetching]);

  const scrollHendler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      news.length < totalCount
    ) {
      setFetching(true);
    }
  };

  const [clicked, setclicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setclicked(null);
    }

    setclicked(i);
  };
  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <BreadCrumb />
      <FloatingButton />
      <div className="container">
        <h2 id="title">Новости</h2>
      </div>
      <div className="container news-body">
        {news.map((item, i) => (
          <div className="news-box-wrapper" key={item.id}>
            <div className="news-box">
              <img src={item.img} alt="" />
              <div>
                <h3>{item.heading}</h3>
                <p className={clicked === i ? "showDesc" : "closeDesc"}>
                  {item.description}
                </p>
                <div className="hews-btn-wrapper" onClick={() => toggle(i)}>
                  {clicked === i ? (
                    <button>Скрыть</button>
                  ) : (
                    <button>Читать полностью</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
