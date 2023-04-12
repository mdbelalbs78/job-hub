import React from "react";
import "./DataPass.css";
import { Link } from "react-router-dom";
const DataPass = ({ ct }) => {
  return (
    <div className="border mb-4">
      <div className="card card-side  p-5">
        <div className="dataPass">
          <div className="w-96">
            <div className="flex">
              <div>
                <img className="mr-3 im-" src={ct.img} alt="Movie" />
              </div>
              <div className="ml-10">
                <h2 className="card-title">{ct.description}</h2>
                <p>{ct.dis}</p>
                <div className="card-actions justify-start">
                  <button class="bg-slate-300  rounded-md">{ct.button1}</button>
                  <button class="bg-slate-300  rounded-md">{ct.button2}</button>
                </div>
                <p className="card-actions justify-start">{ct.location}</p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end pl-5 ml-5 ">
            <button className="btn btn-primary ml-28">
              {" "}
              <Link to={`/viewDetails/${ct.id}`}>View Details</Link>{" "}
            </button>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default DataPass;
