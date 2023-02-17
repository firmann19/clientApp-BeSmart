import React from "react";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

function ContactPage() {
  return (
    <div className="w-full flex justify-center gap-20 p-16">
      <div className="flex-none w-1/2 p-2">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-justify mt-3">
          We take our commitment to our users seriously. if you need our help
          with your user account, have questions about how to use the platform
          or are experiencing technical difficulties, please do not hesitate to
          contact us
        </p>

        <h4 className="ml-10 font-semibold mt-8">
          Jl.Jenderal Sudirman <br /> No.40 Modern Cikokol, <br /> Tangerang,
          Banten
        </h4>

        <div className="flex mt-8">
          <BsFillTelephoneFill />
          <p className=" font-semibold ml-3">(+62)812-8075-7075</p>
        </div>

        <div className="flex mt-3">
          <BsFillEnvelopeFill />
          <p className="font-semibold ml-3">besmart@gmail.com</p>
        </div>

        <div className="ml-8">
          <h1 className="text-2xl font-bold mt-8">Contact Support</h1>
          <p className="text-justify mt-3">
            We understand you may have questions that are not answered in our
            FAQ section. If you cannot find the answer to your question, please
            feel free to contact support.
          </p>
        </div>
      </div>

      <div className="flex-none p-16">
        <div className="w-full p-2 ">
          <label for="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="fullName"
            className="form-control w-full bg-gray-100 border-4"
            id="fullName"
            placeholder="user"
          />
        </div>

        <div className="w-full p-2 ">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control w-full bg-gray-100 border-4"
            id="email"
            placeholder="user@gmail.com"
          />
        </div>

        <div className="w-full p-2 ">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control w-full bg-gray-100 border-4"
            id="message"
            rows="6"
            placeholder="input your text..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
