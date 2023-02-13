import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function ListSelectService(props) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.img} alt="" className=" mx-3 my-3 rounded-md" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="text-lg font-semibold">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSelectService;
