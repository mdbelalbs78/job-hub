import React from "react";
import { Link } from "react-router-dom";
import "./Headar.css";

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
            <a className="btn btn-ghost  normal-case text-2xl font-semibold">
              job hub
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="nav-link text-xl  justify-items-end space-x-4 ">
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="text-2xl bg-slate-500 p-2 rounded-lg ">Star Applying</button>
          </div>
        </div>
      </div>
   
      
    </div>
  );
};

export default Header;
