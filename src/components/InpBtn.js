import React from "react";

const InpBtn = () => {
  return (
    <div className=" flex gap-[.5vw] ">
      <div className=" w-[20vw] border-[1px] rounded-md border-white/25 ">
        <input
          className=" w-[100%] py-[12px] px-[12px] text-white outline-none  bg-transparent "
          type="email"
          placeholder="Email address"
        />
      </div>
      <button className=" py-[12px] px-[14px] rounded-md text-[1vw] text-white font-bold bg-[#E50914]">
        Get Started <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default InpBtn;
