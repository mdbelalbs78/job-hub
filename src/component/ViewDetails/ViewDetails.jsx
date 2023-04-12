import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ViewDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,faPhone,faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../Utilitis/fakedb";

const ViewDetails = () => {
  const details = useLoaderData();

  const handleAddToFakeDb = (id) => {
      addToDb(id);
  }
 
  return (
    <div>
      <div className="jobD text-3xl">
         <h2 >Job Details</h2>
      </div>
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
          <p>
          <FontAwesomeIcon icon={faCircleDollarToSlot} />
            {details.salary}
          
          </p>
          <p>Job Title: {details.dis}</p>
          <h2 className="card-title">Contact Information</h2>

          <p><FontAwesomeIcon icon={faPhone} /> Phone:{details.phone}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> email:{details.email}</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> Address:
            {details.address}
            </p>
          <div className="card-actions ">
            <button onClick={()=>handleAddToFakeDb(details.id)} className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewDetails;
