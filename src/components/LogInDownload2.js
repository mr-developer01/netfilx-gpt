import React from "react";
import cartoon from "./images/cartoon.png";

const LogInDownload2 = () => {
  return (
    <div className="w-full h-[60vh] bg-black border-b-[10px] border-[#232323] flex items-center justify-center">
      <div className=" w-[60%] flex flex-col items-end relative">
        <img src={cartoon} alt="mlogo" className=" w-[80%] " />
      </div>
      <div>
        <h1 className="text-white text-[2.5vw] font-bold leading-tight w-[60%] ">
          Create profiles for kids
        </h1>
        <p className=" text-[1.3vw] w-[60%] text-white leading-tight mt-4 ">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default LogInDownload2;
