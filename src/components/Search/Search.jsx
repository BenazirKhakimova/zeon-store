import React from "react";
import "./Search.css";
import search from "../../assets/icon/search.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ products }) => {
  const [foundProduct, setFoundProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  let value;
  const handleSearch = (e) => {
    value = e.target.value;
    let newFilter = products.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    if (value === "") {
      setFoundProduct([]);
    } else {
      setFoundProduct(newFilter);
    }
  };

  let cliked = {
    display: "block",
  };
  if (!isOpen) {
    cliked = {
      visibility: "hidden",
    };
  }

  const leave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const navigate = useNavigate();
  return (
    <div className="search-wrapper" onMouseLeave={() => leave()}>
      <div className="searchInput">
        <input
          className="search"
          type="text"
          placeholder="Поиск"
          onChange={handleSearch}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
            return;
          }}
        />
        <div className="searchIcon">
          <img src={search} alt="" />
        </div>
      </div>

      {foundProduct.length > 0 && (
        <div style={cliked} className="data-res">
          <div className="results">
            {foundProduct.slice(0, 15).map((item) => (
              <div
                onClick={() => {
                  navigate(`/searchPage`);

                  setIsOpen(false);
                }}
                key={item.id}
                className="result"
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
