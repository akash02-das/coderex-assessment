import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#1E40AF"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Loader;
