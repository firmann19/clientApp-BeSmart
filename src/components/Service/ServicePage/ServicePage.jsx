import React from "react";
import HeaderSelectService from "./HeaderSelectService";
import ListSelectService from "./ListSelectService";
import WebEducation from '../../../assets/education.png'
import WebMarket from '../../../assets/market.png'
import WebForum from '../../../assets/forum.png'

function ServicePage() {
  return (
    <div className="px-6 items-center p-8 bg-white">
      <h1 className="text-4xl font-bold text-center">Available Services</h1>
      <div className="flex gap-18 mx-20 justify-between">
        
        <div className="items-center w-auto h-30 my-7 rounded-xl px-6 bg-secondary-color">
          <button className="w-auto h-11 rounded-xl items-center">
            <h3 className="text-lg text-white font-semibold">
              Web Development
            </h3>
          </button>
        </div>

        <HeaderSelectService ListService="Aplication Development" />

        <HeaderSelectService ListService="UI/UX Design" />
      </div>
      <div className="justify-content-center">
      <ListSelectService 
        img={WebEducation}
        title="Web Development"
      />
      <div className="mt-5">
      <ListSelectService 
        img={WebMarket}
        title="Web Development"
      />
      </div>
      <div className="mt-5">
      <ListSelectService 
        img={WebForum}
        title="Web Development"
      />
      </div>
      </div>
    </div>
  );
}

export default ServicePage;
