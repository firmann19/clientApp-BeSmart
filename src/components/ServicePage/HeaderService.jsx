import React from "react";
import Button from "../Button";
import Hero from "../../assets/service.png";

const HeaderService = () => {
  return (
    <div className="w-full flex gap-10 px-7 items-center bg-white p-16">
      <div className="w-1/2">
        <h1 className="font-semibold text-5xl text-black">
          Choose a service for the project you want to build
        </h1>
        <p className="text-justify my-8">
          provide the best service for all your needs with ease and fun using
          BeSmart discover interisting features from us.
        </p>
        <Button name="Start" />
      </div>
      <div>
        <img className="rounded-xl" src={Hero} alt="hero" />
      </div>
    </div>
  );
};

export default HeaderService;
