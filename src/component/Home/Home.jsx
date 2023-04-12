import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Home.css";
import Feature from "../Feature/Feature";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [features, setFeaturs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFeaturs(data));
  }, []);

  return (
    <div>
      <div className="">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-5xl">
                One Step <br /> Closer To Your <br /> Dream Job{" "}
              </h2>
              <p>
                <small>
                  Explore thousands of job opportunities <br /> with all the
                  information you need. <br /> Its your future. Come find it.
                  Manage all <br /> your job application from start to finish.
                </small>
                <br />
                <button className="btn btn-primary bg-bt">Get Started</button>
              </p>
            </div>
            <figure>
              <img src="/public/All Images/P3OLGJ1 copy 1.png" alt="Album" />
            </figure>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl pt-5 ">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="shop-container">
        {products.slice(0, showAll ? 4 : 4).map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
      <div className="text-center pb-5 mb-5  featureT">
        <h2 className="text-5xl p-5">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="feature-container">
        <div className="features-container">
          {features.slice(0, showAll ? 6 : 4).map((feture) => (
            <Feature key={feture.id} feture={feture}></Feature>
          ))}
        </div>
      </div>
      <div onClick={handleShowAll} className="text-center m-5 pt-5 ">
        <button className="bg-slate-300 p-3 rounded-md ">See More</button>
      </div>
    </div>
  );
};

export default Home;
