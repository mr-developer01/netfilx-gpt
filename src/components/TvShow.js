import React from "react";
import tv from "./images/tv.png";
import v1 from "./videos/v1.m4v";

const TvShow = () => {
  return (
    <div className="w-full h-[60vh] bg-black border-b-[10px] border-[#232323] flex items-center justify-center">
      <div className=" w-[50%] flex justify-end">
        <div className="w-[60%] ">
          <h1 className="text-white text-[2.5vw] font-bold ">
            Enjoy on your TV
          </h1>
          <p className=" text-[1.3vw] w-[100%] text-white leading-tight mt-4 ">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </div>
      <div className=" relative w-[50%] h-[100%] flex items-center">
        <video
          src={v1}
          controls
          autoPlay
          muted
          loop
          className=" w-[22vw] ml-[3.9vw] mb-4 "
        ></video>
        <img src={tv} alt="tv" className=" absolute w-[60%] " />
      </div>
    </div>
  );
};

export default TvShow;
