import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLocationPin,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Feature = ({ feture }) => {
  // console.log(feture);
  const { salary, img, location, description, dis, button1, button2, id } =
    feture;

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
            <p className="card-actions justify-start">
              <FontAwesomeIcon icon={faLocationDot} />
              {location}
            </p>
            <p className="card-actions justify-start pl-3">
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
              {salary}
            </p>
          </div>
          <div class="card-actions justify-start">
            <Link to={`viewDetails/${id}`}>
              <button className="bg-slate-300 p-3 rounded-md">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
