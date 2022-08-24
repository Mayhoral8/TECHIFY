import React from "react";
import { ConsumerContext } from "./context";
import Cartlist from "./cartlist";
import Item from "./cartItem";
import EmptyCart from "../images/EmptyCart.png";

const Cart = () => {
  return (
    <ConsumerContext>
      {(value) => {
        const { cart, addCartList, total } = value;

        if (cart.length > 0) {
          return (
            <>
              <div className="h-full">
                <Cartlist value={value} />

                <div className="Checkout bg-white lg:w-1/4 w-5/6 mx-auto px-3 mt-5  p-2 space-y-2  grid shadow-sm  h-36">
                  <div className="flex flex-row justify-between">
                    <h4 className="font-light">Total:</h4>
                    <h2 className="font-bold">${total}</h2>
                  </div>
                  <div className="mx-auto mt-auto">
                    <button className="bg-orange-500 text-white w-36">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="">
                <h5 className="text-center text-xl my-3 ">
                  Cart Is Currently Empty
                </h5>
                <img src={EmptyCart} alt="" className="mx-auto my-auto" />
              </div>
            </>
          );
        }
      }}
    </ConsumerContext>
  );
};

export default Cart;
