import React from "react";
import logo from "./images/flixLogo.png";

const Header = () => {
  return (
    <div className="w-full h-[10vh] px-[15vw] bg-gradient-to-b from-black flex items-center justify-between">
      <img className="w-[9vw]" src={logo} alt="logo" />
      <div className="flex items-center gap-[1vw] ">
        <div className=" w-[6vw] py-[4px] px-[4px] text-[1vw] rounded text-white border border-white">
          <select className="w-[100%] bg-transparent border-none outline-none">
            <option className="text-black w-[6vw] bg-transparent" value="">
              English
            </option>
            <option
              className="text-black w-[6vw] bg-transparent"
              value="option1"
            >
              Hindi
            </option>
          </select>
        </div>
        <button className="bg-[#C51018] w-[4vw] h-[4vh] px-[.5vw] py-[4px] text-[.8vw] font-medium text-white rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
