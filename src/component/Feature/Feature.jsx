import React from "react";
import "./Feature.css";

const Feature = ({ feture }) => {
  console.log(feture);
  const { salary, img, location, description, dis,button1,button2 } = feture;
  return (
    <div className="cart">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="" src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{description}</h2>
          <p className="card-actions justify-start">{dis}</p>
          <div className="card-actions justify-start">
            <button class="bg-slate-300 p-3 rounded-md">{button1}</button>
            <button class="bg-slate-300 p-3 rounded-md">{button2}</button>
          </div>
          <div className="flex">
            <p className="card-actions justify-start">{location}</p>
            <p className="card-actions justify-start">{salary}</p>
          </div>
          <div class="card-actions justify-start">
            <button class="bg-slate-300 p-3 rounded-md">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
