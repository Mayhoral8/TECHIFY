import { React, useEffect } from "react";
import Item from "./Product";
import { items } from "./items";
import { storeProducts } from "./data";
import { ConsumerContext } from "./context";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import OnBoarding1 from "../images/OnBoarding1.png";
import OnBoarding2 from "../images/OnBoarding2.png";
import OnBoarding3 from "../images/OnBoarding3.png";
import Fast from "../images/Fast.png";
import Cart from "../images/Cart.png";
import Verified from "../images/Verified.png";
import Banner from "../images/Banner.png";
import Tablet from "../images/Tablet.png";
import Laptop from "../images/Laptop.png";
import Smartphone from "../images/Smartphone.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bg-gray-100 scroll-smooth">
        <div>
          <img
            src={Banner}
            className="lg:w-full lg:px-20 px-6 lg:h-full mx-auto mt-4 my-5  sm:object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-1 relative z-2 mx-auto mt-8 sm:gap-x-4 gap-y-4 lg:gap-x-4 w-5/6 py-2 ">
          <h3 className="text-center pl-4 text-orange-500 md:text-center mx-4 mt-4 capitalize font-bold text-3xl">
            Why trust us?
          </h3>
          <div className="w-full mt-12 space-y-5 grid lg:grid-cols-3  mx-auto gap-x-4">
            <div
              className=" lg:mt-5 flex flew-row border-2 h-20  border-gray-300 rounded-md px-3"
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
            >
              <img src={Verified} alt="" className="h-10 my-auto" />
              <span className="mx-3 my-auto">Secure Payments</span>
            </div>
            <div
              className="flex flew-row border-2 h-20  border-gray-300 rounded-md px-3 js-show-on-scrorll"
              data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
            >
              <img src={Fast} alt="" className="h-10 my-auto" />
              <span className="mx-3 my-auto">Swift Delivery</span>
            </div>
            <div
              className="flex flew-row border-2 border-gray-300 h-20 rounded-md px-3 js-show-on-scrorll"
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
            >
              <img src={Cart} alt="" className="h-10 my-auto" />
              <span className="mx-3 my-auto">95% Positive Feedbacks </span>
            </div>
          </div>
        </div>
        <h3 className="text-center pl-4 text-orange-500 md:text-center mx-4 mt-4 capitalize font-bold text-3xl">
          Shop By category
        </h3>

        <ConsumerContext>
          {(value) => {
            const { topScroll } = value;
            return (
              <div className="grid grid-cols-2 px-10 lg:px-28 gap-x-4 gap-y-3 mt-12">
                <Link to="/category/smartphones">
                  <div
                    className="flex flex-col border-2 h-40 bg-white rounded-md px-3 "
                    data-aos="fade-down"
                    data-aos-easing="ease-out"
                    data-aos-duration="1200"
                    onClick={() => topScroll()}
                  >
                    <span className=" mx-auto mt-2">Smartphones</span>
                    <img src={Smartphone} alt="" className="h-20 mx-auto" />
                  </div>
                </Link>

                <Link to="/category/tablets">
                  <div
                    className="flex flex-col border-2 h-40 bg-white rounded-md px-3"
                    data-aos="fade-down"
                    data-aos-easing="ease-out"
                    data-aos-duration="1200"
                    onClick={() => topScroll()}
                  >
                    <span className="mx-auto">Tablets</span>
                    <img src={Tablet} alt="" className="h-20 mx-auto" />
                  </div>
                </Link>
                <Link to="/category/laptops">
                  <div
                    className="flex flex-col border-2 h-40 bg-white rounded-md px-3"
                    data-aos="fade-up"
                    data-aos-easing="ease-out"
                    data-aos-duration="1200"
                    onClick={() => topScroll()}
                  >
                    <span className="mx-auto">Laptops</span>
                    <img src={Laptop} alt="" className="h-20 mx-auto" />
                  </div>
                </Link>
                <Link to="/category/accessories">
                  <div
                    className="flex flex-col border-2 h-40  bg-white rounded-md px-3"
                    data-aos="fade-up"
                    data-aos-easing="ease-out"
                    data-aos-duration="1200"
                    onClick={() => topScroll()}
                  >
                    <span className="mx-auto">Accessories</span>
                    <img src={Smartphone} alt="" className="h-20 mx-auto" />
                  </div>
                </Link>
              </div>
            );
          }}
        </ConsumerContext>
        <h3 className="text-center pl-4 text-orange-500 md:text-center mx-4 mt-10 capitalize font-bold text-3xl">
          Featured
        </h3>
        <div className="grid sm: grid-cols-1 mx-auto gap-x-4 gap-y-4 lg:w-4/5 lg:grid-cols-4 lg:mx-auto sm: w-5/6 sm: py-5 ">
          <ConsumerContext>
            {(value) => {
              return value.product.map((item, index) => {
                return <Item key={item.id} item={item} />;
              });
            }}
          </ConsumerContext>
        </div>
      </div>
    </>
  );
};

export default Main;
