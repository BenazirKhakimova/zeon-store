import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./SearchPage.css";
import { Pagination } from "antd";
const SearchPage = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="container">
        <p id="search-res">Результаты поиска по запросу:</p>
      </div>
      <div className="container pagination">
        <Pagination
        // total={+productsCount}
        // current={+page}
        // pageSize={+limit}
        // defaultCurrent={1}
        // onChange={(page, limit) => {
        //   setPage(page);
        //   setLimit(limit);
        //}}
        />
      </div>
    </div>
  );
};

export default SearchPage;
