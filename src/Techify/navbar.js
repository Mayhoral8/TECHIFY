import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TechifyLogo from "../images/TechifyLogo.png";
import { ConsumerContext } from "./context";
function Navbar() {
  const searchRef = useRef();

  return (
    <>
      <nav class="flex items-center sticky top-0 justify-between flex-wrap  bg-[#f8fafc] p-6 z-10 shadow-md lg:text-gray-700">
        <ConsumerContext>
          {(value) => {
            const {
              cart,
              setOpen,
              open,
              topScroll,
              barMode,
              setBarMode,
            } = value;
            return (
              <>
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                  <Link to="/">
                    <img
                      src={TechifyLogo}
                      alt=""
                      onClick={() => {
                        setOpen(false);
                        setBarMode(true);
                      }}
                      className={`sm:h-14 pl-2 ${
                        barMode ? "text-orange-500" : ""
                      } w-14`}
                    />
                  </Link>
                </div>

                <div class="block lg:hidden">
                  <button
                    onClick={() => setOpen(!open)}
                    class="flex items-center px-3 py-2 rounded-lg border-2 text-orange-500 border-orange-500  hover:text-white hover:border-white transition-all duration-500 ease-in"
                  >
                    <i className={open ? "fas fa-xmark" : "fas fa-bars"} />
                  </button>
                </div>
                <div
                  className={`w-full block absolute mt-4 left-0 ${
                    open ? "top-14" : "top-[-490px]"
                  } shadow-md  z-4 transition-all duration-500 ease-in  bg-orange-500 pl-11 flex-grow lg:grid lg:grid-cols-4 lg:top-0 lg:gap-x-20 lg:bg-[#f8fafc] lg:shadow-none lg:ml-96 lg:justify-between lg:flex-row lg:items-center lg:w-auto`}
                >
                  <a href="#" class="block mt-4 lg:inline-block  lg:mt-0 mr-4">
                    About Us
                  </a>
                  <a
                    href="#"
                    class="block mt-4 lg:inline-block lg:mt-0   hover:text-white"
                  >
                    Testimonials
                  </a>
                  <div class="text-sm lg:flex-grow">
                    <Link to="/cart">
                      <div
                        onClick={() => setOpen(!open)}
                        className="lg:visible w-10 mt-4   jusify-center items-center  text-center rounded-md flex flex-row h-8 bg-white lg:bg-none pl-1.5"
                      >
                        <i
                          onClick={() => topScroll()}
                          title="Cart"
                          className="fas fa-shopping-cart text-gray-500 text-xl"
                        ></i>
                        <div className="text-xs bg-orange-500 w-3 leading-4 h-4 ml-1 rounded-xl text-white font-bold translate-x-full mb-3 absolute ">
                          {cart.length}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="inline-block text-sm px-4 py-2 leading-none border rounded  border-white bg-orange-500 text-white border-3 hover:border-transparent  hover:bg-white mt-4 lg:mt-0 "
                    >
                      Download App
                    </a>
                  </div>
                </div>
              </>
            );
          }}
        </ConsumerContext>
      </nav>
    </>
  );
}

export default Navbar;
