"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-transparent">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button>How It Works</button>
              </li>
              <li>
                <button>About Us</button>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost normal-case text-xl">
            Certi-Block
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="font-bold text-md text-white">
                How It Works
              </button>
            </li>
            <li tabIndex={0}>
              <button className="font-bold text-md text-white">About Us</button>
            </li>
            <li>
              <button className="font-bold text-md text-white">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div
          className="navbar-end"
          onClick={() => (window.location.href = "/login")}
        >
          <button className="btn btn-primary">Login/Register as Issuer</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
