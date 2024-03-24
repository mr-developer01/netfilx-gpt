import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-20 bg-black flex flex-col items-center gap-4">
      <p className="text-white w-[60%]">
        Questions? Call{" "}
        <span className="underline underline-offset-1">+91 8709706893</span>
      </p>
      <div className="w-[60%] flex gap-[10vw]">
        <div className="flex flex-col gap-[2vh]">
          <p className="text-white underline underline-offset-1 cursor-pointer">
            FAQ
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Investor Relations
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Privacy
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Speed Test
          </p>
          <div className=" w-[6vw] py-[1px] px-[4px] text-[1vw] rounded text-white border border-white">
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
          <p className="text-white">Netflix India</p>
        </div>
        <div className="flex flex-col gap-[2vh]">
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Help Centre
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Jobs
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Cookie Preferences
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Legal Notices
          </p>
        </div>
        <div className="flex flex-col gap-[2vh]">
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Account
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Ways to Watch
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Corporate Information
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Only on Netflix
          </p>
        </div>
        <div className="flex flex-col gap-[2vh]">
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Media Centre
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Terms of Use
          </p>
          <p className="text-white underline underline-offset-1 cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
