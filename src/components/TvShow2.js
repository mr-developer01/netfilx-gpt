import React from "react";
import v2 from "./videos/v2.m4v";
import pic from "./images/device-pile-in.png";

const TvShow2 = () => {
  return (
    <div className="w-full h-[60vh] bg-black border-b-[10px] border-[#232323] flex items-center justify-center">
      <div className=" w-[50%] flex justify-end">
        <div className="w-[60%] ">
          <h1 className="text-white text-[2.5vw] font-bold ">
            Watch everywhere
          </h1>
          <p className=" text-[1.3vw] w-[100%] text-white leading-tight mt-4 ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
      <div className=" relative w-[50%] h-[100%] flex items-center">
        <video
          src={v2}
          controls
          autoPlay
          muted
          loop
          className=" w-[19vw] ml-[5vw] mb-4 "
        ></video>
        <img src={pic} alt="tv" className=" absolute bottom-2 w-[60%] " />
      </div>
    </div>
  );
};

export default TvShow2;
