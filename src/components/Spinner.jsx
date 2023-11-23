import React from "react";
import { Puff } from "react-loader-spinner";

export default function Spinner() {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
