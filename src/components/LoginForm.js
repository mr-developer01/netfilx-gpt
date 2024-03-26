import React, { useState } from "react";
// import Header from "./Header";
import bg from "./images/bgimg.jpg";
import logo from "./images/flixLogo.png";
import Footer from "./Footer";

const LoginForm = () => {
  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <>
      <div
        className="w-full min-h-[85vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img src={logo} alt="logo" className="w-[14vw]" />
        {/* <Header /> */}
        <div className="absolute top-0 w-[100%] h-[100%] bg-black/60 flex flex-col items-center justify-center ">
          <form className=" w-[26%] h-[85%] mt-[40px] bg-black/60 flex flex-col  items-center justify-center gap-[5vh] ">
            <div className="w-[70%]">
              {login ? (
                <h1 className="text-white text-[2vw] font-bold ">Sign In</h1>
              ) : (
                <h1 className="text-white text-[2vw] font-bold ">Sign Up</h1>
              )}
            </div>
            <div className=" w-[70%] flex flex-col gap-[2vh] ">
              {!login && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="text-white px-[1vw] py-[.6vw] rounded-md bg-transparent border-[1px] border-white/50 "
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="text-white px-[1vw] py-[.6vw] rounded-md bg-transparent border-[1px] border-white/50 "
              />
              <input
                type="password"
                placeholder="Password"
                className="text-white px-[1vw] py-[.6vw] rounded-md bg-transparent border-[1px] border-white/50 "
              />
              <button
                type="submit"
                className="text-white px-[1vw] py-[.6vw] rounded-md bg-[#E50914] border-none"
              >
                {login ? "Sign In" : "Sign Up"}
              </button>
              {login && (
                <p className="text-white text-center cursor-pointer">
                  Forgot password?
                </p>
              )}
            </div>
            <div className="w-[70%] flex items-center gap-[1vw] relative">
              <input
                onClick={() => setChecked(!checked)}
                type="radio"
                id="rdo"
                className={`h-5 w-5 border-2 border-gray-400 rounded-md appearance-none cursor-pointer ${
                  checked ? "checked:bg-gray-600" : "checked:bg-transparent"
                } `}
              />
              <label htmlFor="rdo" className="text-white cursor-pointer">
                Rember me
              </label>
              {checked && (
                <i className="ri-check-line text-white text-[.5vw] absolute top-[5px] left-[4px] cursor-pointer"></i>
              )}
            </div>
            <div className="w-[70%]">
              <p className="text-white/60 text-[1vw]">
                New to Netflix?
                <span
                  className="text-white font-bold cursor-pointer hover:underline underline-offset-1"
                  onClick={() => setLogin(!login)}
                >
                  Sign up now.
                </span>
              </p>
            </div>
            <div className="text-white/60 text-[.8vw] font-extralight w-[70%] mt-[-30px] ">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-blue-500 cursor-pointer hover:underline underline-offset-1">
                Learn more.
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer bgC="black" />
    </>
  );
};

export default LoginForm;
