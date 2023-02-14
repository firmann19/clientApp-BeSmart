import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BeSmart-modified.png";
import LoginImage from "../assets/login-img.png";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  return (
    <section id="loginPage" className="h-screen bg-login-regist">
      <div className="flex flex-col items-center lg:flex-row  lg:h-full">
        <div className="w-full self-center p-8 mx-5 md:h-3/5 lg:w-2/5 ">
          <img
            className="mx-auto"
            src={Logo}
            height="80"
            width="80"
            alt="logo"
          />
          <h4 className=" text-2xl font-semibold text-center my-2">
            Welcome to <br />
            <h4 className="text-primary-color">BeSmart</h4>
          </h4>
          <h4 className="text-2xl font-semibold text-center my-3">
            Login to your account
          </h4>
          <LoginInput />
          <p className="text-center my-2">
            Don't have account?{" "}
            <Link to="/register" className="text-primary-color">SignUp</Link>
          </p>
        </div>

        <div className="w-full items-center md:h-2/5 lg:w-3/5 lg:h-full">
          <div className="inline-block">
            <img
              src={LoginImage}
              alt="loginImage"
              className="w-3/4 mx-auto p-4 md:w-3/5 md:p-10"
            />
          </div>
          <h4 className="text-2xl font-semibold text-center text-white">
            We provide learning and services <br /> to help you create innovations
          </h4>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
