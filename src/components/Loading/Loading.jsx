import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <ThreeDots color="#00BFFF" height={70} width={70} />
      </div>
    </>
  );
};

export default Loading;
