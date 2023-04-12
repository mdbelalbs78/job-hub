import React from "react";
import "./DataPass.css";
import { Link } from "react-router-dom";
const DataPass = ({ ct }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-5">
        <div className="dataPass">
          <div>
            <img className="mr-3 im-bt" src={ct.img} alt="Movie" />
          </div>
          <div>
            <h2 className="card-title">{ct.description}</h2>
            <p>{ct.dis}</p>
            <div className="card-actions justify-start">
            <button class="bg-slate-300  rounded-md">{ct.button1}</button>
            <button class="bg-slate-300  rounded-md">{ct.button2}</button>
          </div>
          <p className="card-actions justify-start">
              
              {ct.location}
            </p>
          </div>
          <div className="card-actions justify-end pl-5 ml-5">
            <button className="btn btn-primary"> <Link to={`viewDetails/${ct.id}`}>View Details</Link> </button>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default DataPass;
