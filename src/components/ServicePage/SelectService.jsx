import React from "react";
import SelectServiceItem from "./SelectServiceItem";

function SelectService() {
  return (
    <div className="my-10">
      <h1 className="font-bold text-black text-center text-3xl">
        Available Service
      </h1>
      <div className="container flex justify-around mt-5">
        <div className="items-center bg-secondary-color w-auto h-30 my-7 rounded-xl px-6 border-4 border-secondary-color">
          <button className="w-auto h-11 rounded-xl items-center">
            <h3 className="text-lg font-semibold text-white">Web Development</h3>
          </button>
        </div>

        <SelectServiceItem ListService="Aplication Development" />

        <SelectServiceItem ListService="UI/UX Design" />
      </div>
    </div>
  );
}

export default SelectService;
