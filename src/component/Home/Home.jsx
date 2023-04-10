import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  
  return (
    <div>
      <div className="text-2xl">
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

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
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
        {products.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
