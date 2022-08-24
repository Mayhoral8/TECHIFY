import React, { Component, createRef } from "react";
import { ConsumerContext } from "./context";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
// import ReactDOM  from 'react';

const Item = (props) => {
  const { title, price, discount, img, inCart, id } = props.item;
  const color = "#ff7504e5";
  const color2 = "white";
  const reff = useRef();
  const labelRef = useRef();
  const iconRef2 = useRef();
  const imgRef = useRef();
  return (
    <article
      className="bg-white shadow-sm rounded-sm "
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-duration="1200"
    >
      <ConsumerContext>
        {(value) => {
          let {
            handleDetail,
            addToCart,
            handleOpenModal,
            handleSetCart,
            topScroll,
          } = value;
          return (
            <>
              <div className="">
                <div className="">
                  <div>
                    <div className="w-full" onClick={() => handleDetail(id)}>
                      <Link to="/details">
                        <img
                          src={require(`./${img}`)}
                          alt={img}
                          className="h-48 mt-2 mx-auto hover:scale-105 transition-all duration-500 ease-in object-cover object-center"
                          ref={imgRef}
                          onClick={() => topScroll()}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-5 px-3 mb-2">
                  <div>
                    <h5 className="title">{title}</h5>
                    <h4 className="price text-lg text-orange-500">{`$${price}`}</h4>
                  </div>
                  <button
                    className="h-10 rounded-md text-sm px-2 w-auto border-2  hover:text-orange-500 hover:border-orange-500"
                    ref={labelRef}
                    style={{
                      backgroundColor: inCart ? " #ff7504e5" : color2,
                      color: inCart ? "#f3f3f3" : "black",
                    }}
                    disabled={inCart ? true : false}
                    onClick={() => {
                      addToCart(id);
                      handleOpenModal(id);
                      handleSetCart(id);
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </>
          );
        }}
      </ConsumerContext>
    </article>
  );
};
const ProductWrapper = styled.div``;

export default Item;
