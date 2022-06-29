import React from "react";
import "./Search.css";
import search from "../../assets/icon/search.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";

const Search = ({ setOpenSearch }) => {
  const { handleSearch, getValue, foundProduct, setGetValue, setFoundProduct } =
    useContext(contextProduct);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  let clicked = {
    visibility: "visible",
  };
  if (!isOpen) {
    clicked = {
      visibility: "hidden",
    };
  }

  const clearInput = () => {
    setFoundProduct([]);
    setGetValue("");
    ref.current.value = "";
  };

  const leave = () => {
    setTimeout(() => {
      setIsOpen(false);
      clearInput();
    }, 500);
  };
  const handleNavigate = () => {
    navigate(`/searchpage/${getValue}`);
    setIsOpen(false);
    clearInput();
    setOpenSearch(false);
  };

  return (
    <div className="search-wrapper" onMouseLeave={() => leave()}>
      <div className="searchInput">
        <input
          className="search"
          type="text"
          placeholder="Поиск"
          ref={ref}
          onChange={handleSearch}
          onClick={() => {
            setIsOpen(true);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && getValue !== "") {
              handleNavigate();
            }
          }}
        />
        <div
          className="searchIcon"
          onClick={() => (getValue !== "" ? handleNavigate() : null)}
        >
          <img src={search} alt="" />
        </div>
      </div>

      {foundProduct.length > 0 && (
        <div style={clicked} className="data-res">
          <div className="results">
            {foundProduct.slice(0, 15).map((item) => (
              <div
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/ditails/${item.id}`);
                  clearInput();
                  setOpenSearch(false);
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
