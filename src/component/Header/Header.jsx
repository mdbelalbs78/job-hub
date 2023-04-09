import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <a className="btn btn-ghost normal-case text-2xl font-semibold">
              Destination
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="nav-link text-xl">
                <Link to="/">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="apply p-5">Star Applying</a>
          </div>
        </div>
      </div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
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
  );
};

export default Header;
