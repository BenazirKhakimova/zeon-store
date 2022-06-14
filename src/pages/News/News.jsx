import React, { useEffect, useState } from "react";
import "./News.css";
import { Empty } from "antd";
import axios from "axios";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const API = "http://localhost:8000/news";

  useEffect(() => {
    if (fetching) {
      axios
        .get(`${API}?_page=${currentPage}&_limit=8`)
        .then((response) => {
          setTotalCount(response.headers["x-total-count"]);
          setNews([...news, ...response.data]);
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

  return (
    <>
      <FloatingButton />
      <div className="container">
        <h2 id="title">Новости</h2>
      </div>
      <div className="container news-body">
        {news.length > 0 ? (
          news.map((item) => (
            <div className="news-box-wrapper" key={item.id}>
              <div className="news-box">
                <img src={item.img} alt="" />
                <div>
                  <h3>{item.heading}</h3>
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
