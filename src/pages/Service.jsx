import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeaderService from "../components/ServicePage/HeaderService";
import ListServiceItem from "../components/ServicePage/ListServiceItem";
import SelectService from "../components/ServicePage/SelectService";


function Service() {
  return (
    <div className='bg-bg-color'>
      <Navbar />
       <HeaderService />
       <SelectService />
       <ListServiceItem />
      <Footer />
    </div>
  );
}

export default Service;
