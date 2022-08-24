import React from "react";
import { ConsumerContext } from "./context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Details = () => {
  return (
    <ConsumerContext>
      {(value) => {
        const {
          detailProd,
          addToCart,
          handleOpenModal,
          handleDetail,
          handleSetCart,
        } = value;

        const [{ id, company, img, info, price, title, inCart }] = detailProd;

        return (
          <>
            <div>
              <section className="grid lg:grid-cols-2 mt-3">
                <div className="img-detail">
                  <img
                    src={require(`./${img}`)}
                    alt=""
                    className="h-66 mx-auto py-3"
                  />
                </div>
                <div className="px-3 grid grid-cols-1 gap-y-4">
                  <h3 className="text-xl">Model: {title}</h3>

                  <h4>Brand: {company}</h4>

                  <h2 className="price text-2xl font-bold  text-orange-500">
                    ${price}
                  </h2>

                  <button
                    className="w-28 mr-auto hover:scale-105 transition-shadow transition-ease-in-out delay-150 bg-orange-500 rounded-sm h-8 text-gray-50"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      addToCart(id);
                      handleOpenModal();
                      handleSetCart(id);
                    }}
                  >
                    {inCart ? <h4>In cart</h4> : <h4>Add To Cart</h4>}
                  </button>
                  <Link to="/">
                    <button className="border-2 border-orange-400 rounded-sm w-36 text-orange-500 h-8">
                      Back To Shopping
                    </button>
                  </Link>

                  <p className="item-descp">Description: {info}</p>
                </div>
              </section>
              <div className="divider mt-10"></div>
            </div>
          </>
        );
      }}
    </ConsumerContext>
  );
};

const DetailStyle = styled.h5`
  padding: 0.5rem 0rem;
  text-transform: capitalize;
`;
const DetailBtn = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: start;
  background: none;
  border-color: orange;
  border: none;
`;

export default Details;
