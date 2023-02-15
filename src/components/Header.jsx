import React from "react";
import Button from "./Button";
import Hero from "../assets/header.png";

const Header = () => {
    return (
        <div className="w-full flex gap-10 px-7 items-center bg-image bg-white p-10">
            <div className="w-1/2">
                <h1 className="font-semibold text-5xl text-text-hero">
                    Ciptakan Suksesmu
                    <br />
                    Bersama
                    <span className="text-primary-color"> BeSmart</span>
                </h1>
                <p className="text-justify my-8">
                    Kami akan membantu anda sukses berkarir dalam dunia teknologi dengan
                    beragam metode pembelajaran yang dapat mengasah pola pikir kritis dan
                    kreatif untuk menciptakan suatu inovasi yang bermanfaat terhadap
                    persoalan kehidupan.
                </p>
                <Button name="Memulai" />
            </div>
            <div>
                <img src={Hero} alt="hero" />
            </div>
        </div>
    );
};

export default Header;
