import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <Puff color="#00BFFF" height={80} width={80} />
      </div>
    </>
  );
};

export default Loading;
