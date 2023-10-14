import React from "react";
import { ThreeDots } from "react-loader-spinner";
const FallbackLoader = ({ height }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height ,
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#90ee90"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default FallbackLoader;
