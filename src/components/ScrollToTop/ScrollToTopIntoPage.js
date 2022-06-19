import React from "react";

const ScrollToTopIntoPage = () => {
  const move = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return <div>{move()}</div>;
};

export default ScrollToTopIntoPage;
