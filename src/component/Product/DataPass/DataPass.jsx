import React from "react";
import "./DataPass.css";
const DataPass = ({ ct }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-5">
        <div className="dataPass">
          <div>
            <img className="mr-3" src={ct.img} alt="Movie" />
          </div>
          <div>
            <h2 className="card-title">{ct.description}</h2>
            <p>{ct.dis}</p>
            
          </div>
          <div className="card-actions justify-end pl-5 ml-5">
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default DataPass;
