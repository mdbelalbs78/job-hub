import React from "react";
import "./ApplyDetails.css";

const ApplyDetails = ({ app }) => {
  const { img, description, dis, button1, button2 } = app;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="dFlex ">
          <div>
            <figure>
              <img className="p-3 mr-5 h-15 w-25" src={img} alt="Movie" />
            </figure>
          </div>
          <div>
            <h2 className="text-2xl">{description}</h2>
            <p>{dis}</p>
            <button class="bg-slate-300 p-3 rounded-md mr-5 pr-5">{button1}</button>
            <button class="bg-slate-300 p-3 rounded-md mr-5 pr-5">{button2}</button>
          </div>
        </div>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDetails;
