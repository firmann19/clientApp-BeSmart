import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BeSmart-modified.png";
import LoginImage from "../assets/login-img.png";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  return (
    <section className="login-page">
      <header className="login-page__hero">
        <img
          className="rounded-4"
          src={LoginImage}
          height="400"
          width="500"
          alt="First slide"
        />
      </header>
      <article className="login-page__main">
        <div className="row">
          <div className="col">
            <img
              className="logo rounded-4"
              src={Logo}
              height="80"
              width="80"
              alt="Logo"
            />
            <h4 className="myApp mt-2">
              <strong>Welcome to</strong>
              <br />
              <strong className="text-center text-primary">QuoTalk</strong>
            </h4>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col">
            <h5 className="intro-login mb-3">
              <strong>Login to your account</strong>
            </h5>
            <LoginInput />
            <p className="move-register mt-3">
              Don&apos;t have an account?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default LoginPage;
