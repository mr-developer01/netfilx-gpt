import React from "react";

const FAqCard = ({text}) => {
  return (
    <div className="w-full h-[10vh] bg-[#2D2D2D] flex items-center justify-between px-10">
      <p className=" text-white text-[1.5vw] ">{text}</p>
      <i class="ri-add-line text-white text-[2.5vw] "></i>
    </div>
  );
};

export default FAqCard;
