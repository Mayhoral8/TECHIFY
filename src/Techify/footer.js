import React from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "./context";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-500 ">
        <div className="h-40 text-white w-full grid grid-cols-4 text-center capitalize gap-x-2 px-4 lg:px-12 ">
          <a
            href="#"
            class="block my-auto lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            class="block my-auto lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Testimonials
          </a>
          <a
            href="#"
            class="block my-auto lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Policy
          </a>
          <a
            href="#"
            class="block my-auto lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-row my-auto justify-center mx-auto items-center w-full capitalize text-white">
          <h4>
            <i className="fas fa-copyright text-center mr-1" />
          </h4>
          <span className="font-light ">copyright by</span>
          <a href="#" className="f ml-2">
            Mayowa Ayeni
          </a>
        </div>
      </div>
      <div className="bottom-0 sticky bg-[#f8fafc] h-20 lg:hidden shadow-lg">
        <ConsumerContext>
          {(value) => {
            const { cart, setOpen, open, topScroll, setBarMode, barMode } =
              value;
            return (
              <>
                <div className="flex flex-row justify-around items-center ">
                  <Link to="/">
                    <div
                      onClick={() => {
                        topScroll();
                        setBarMode(true);
                      }}
                    >
                      <i
                        className={`fa fa-home  jusify-center ${
                          barMode ? "text-orange-500" : ""
                        } items-center mt-4  rounded-md flex flex-row h-8 text-xl`}
                      />
                    </div>
                  </Link>
                  <Link to="/cart">
                    <div className=" lg:visible w-10  jusify-center items-center mt-4 text-center rounded-md flex flex-row h-8">
                      <i
                        onClick={() => {
                          topScroll();
                          setBarMode(false);
                        }}
                        title="Cart"
                        className={`fas fa-shopping-cart ${
                          barMode ? "" : "text-orange-500"
                        }  text-xl`}
                      ></i>
                      <div className="text-xs bg-orange-500 w-3 leading-4 h-4 ml-1 rounded-xl text-white font-bold translate-x-full mb-3 absolute ">
                        {cart.length}
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          }}
        </ConsumerContext>
      </div>
    </>
  );
};
export default Footer;
