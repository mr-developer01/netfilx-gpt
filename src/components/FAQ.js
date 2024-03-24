import React from "react";
import InpBtn from "./InpBtn";
import FAqCard from "./FAqCard";

const FAQ = () => {
  return (
    <div className="w-full py-20 bg-black border-b-[10px] border-[#232323] flex flex-col  items-center justify-center gap-8">
      <h1 className="text-white text-[3vw] font-bold mt-[-6vh]">
        Frequently Asked Questions
      </h1>
      <div className="w-[60%]  flex flex-col gap-4 ">
        <FAqCard text="What is Netflix?" />
        <FAqCard text="How much does Netflix cost?" />
        <FAqCard text="Where can I watch?" />
        <FAqCard text="How do I cancel?" />
        <FAqCard text="What can I watch on Netflix?" />
        <FAqCard text="Is Netflix good for kids?" />
      </div>
      <div className="mt-10 flex flex-col items-center gap-5">
        <p className="text-white text-[1vw] font-semibold ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <InpBtn />
      </div>
    </div>
  );
};

export default FAQ;
