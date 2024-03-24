import React from "react";
import Header from "./Header";
import bg from "./images/bgimg.jpg";
import InpBtn from "./InpBtn";
import TvShow from "./TvShow";
import LogInDownload from "./LogInDownload";
import TvShow2 from "./TvShow2";
import LogInDownload2 from "./LogInDownload2";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-[70vh] relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute w-[100%] h-[100%] bg-black/60 border-b-[10px] border-[#232323] flex flex-col items-center justify-center ">
          <h1 className="text-[2.5vw] font-black text-white ">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-[1.5vw] font-normal mt-[10px] text-white ">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-[1.2vw] font-normal mt-[15px] text-white ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className=" mt-[15px] ">
            <InpBtn />
          </div>
        </div>
        <Header />
      </div>
      <TvShow />
      <LogInDownload />
      <TvShow2 />
      <LogInDownload2 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Login;
