import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicePage from "../components/Service/ServicePage/ServicePage";

function Service() {
  return (
    <div className='bg-bg-color'>
      <Navbar />
      <ServicePage />
      <Footer />
    </div>
  );
}

export default Service;
