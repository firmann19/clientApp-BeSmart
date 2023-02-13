import React from "react";

function HeaderSelectService(props) {
  return (
    <>
    <div className='items-center w-auto h-30 my-7 rounded-xl px-6 border-4 border-secondary-color'>
        <button className="w-auto h-11 rounded-xl items-center">
        <h3 className='text-lg font-semibold'>{props.ListService}</h3>
        </button>
    </div>
    </>
  );
}

export default HeaderSelectService;
