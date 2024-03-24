import React from "react";
import mlogo from "./images/mobile-0819.jpg";
import boxshot from "./images/boxshot.png";

const LogInDownload = () => {
  return (
    <div className="w-full h-[60vh] bg-black border-b-[10px] border-[#232323] flex items-center justify-center">
      <div className=" flex flex-col items-end relative">
        <img src={mlogo} alt="mlogo" className=" w-[80%] " />
        <div className=" w-[15vw] h-[10vh] bg-black border-[2px] absolute bottom-[4%] left-[37%] rounded-xl flex items-center justify-around">
          <div className="w-[70%] flex items-center gap-4">
            <img src={boxshot} alt="boxShot" className="w-[30%] " />
            <div>
              <h3 className="text-white font-bold">Stranger Things</h3>
              <p className="text-blue-400">Downloading...</p>
            </div>
          </div>
          <i class="ri-download-line text-white text-[1.4vw]"></i>
        </div>
      </div>
      <div>
        <h1 className="text-white text-[2.5vw] font-bold leading-tight w-[60%] ">
          Download your shows to watch offline
        </h1>
        <p className=" text-[1.3vw] w-[60%] text-white leading-tight mt-4 ">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default LogInDownload;
