import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ViewDetails.css";

const ViewDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="view">
      <div>
        <div className="card-body max-w-md ">
          <p>{details.JobDescription}</p>
          <p>{details.JobResponsibility}</p>
          <p>{details.educational}</p>
          <p>{details.experiences}</p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="card-title">Job Details</h2>
          <p>{details.salary}</p>
          <p>Job Title: {details.title}</p>
          <h2 className="card-title">Contact Information</h2>
          
          <p>Phone:{details.phone}</p>
          <p>email:{details.email}</p>
          <p>Address:{details.address}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
