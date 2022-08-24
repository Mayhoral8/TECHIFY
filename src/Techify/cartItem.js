import React, { createRef, useRef } from "react";
import styled from "styled-components";

const CartItem = ({ items, value }) => {
  const { img, title, price, id, count } = items;
  const { increment, decrement, removeItem, quantity } = value;
  const itemQnt = useRef();

  return (
    <>
      <div className="bg-white w-5/6 mx-auto px-3 my-3  p-2 space-y-2 shadow-sm grid lg:grid-cols-4 ">
        <img src={require(`./${img}`)} alt="" className="h-24 mx-auto my-3" />
        <div className="">
          <h3>{title}</h3>
          <h4 className="lg:mt-20 text-orange-500 text-lg">${price}</h4>
        </div>
        <div className="lg:ml-10">
          <div className="grid grid-cols-2 lg:ml-44 lg:flex flex-column-reverse">
            <div className="grid grid-cols-3 w-28 gap-x-2  lg:mt-20">
              <button
                ref={itemQnt}
                onClick={() => decrement(id)}
                className="border-2 rounded-md border-orange-500 w-8"
              >
                <i className="fas fa-minus" />
              </button>
              <h5 className="text-center">{count}</h5>
              <button
                className="border-2  border-orange-500 w-8 rounded-sm"
                onClick={() => increment(id)}
              >
                <i className="fas fa-plus" />
              </button>
            </div>

            <i
              className="fas fa-trash ml-auto mt-auto lg:ml-12 cursor-pointer"
              onClick={() => removeItem(id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
