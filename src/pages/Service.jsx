import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeaderService from "../components/ServicePage/HeaderService";
import ListService from "../components/ServicePage/ListService";
import SelectService from "../components/ServicePage/SelectService";


function Service() {
  return (
    <div className='bg-bg-color'>
      <Navbar />
       <HeaderService />
       <SelectService />
       <ListService />
      <Footer />
    </div>
  );
}

export default Service;
