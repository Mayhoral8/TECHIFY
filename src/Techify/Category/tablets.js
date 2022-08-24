import React from "react";
import { ConsumerContext } from "../context";
import CategoryList from "./categoryList";
const Tablets = () => {
  return (
    <ConsumerContext>
      {(value) => {
        const { product } = value;

        const items = product.filter((item) => {
          return item.category === "tablet";
        });

        return (
          <div className="grid sm: grid-cols-1 mx-auto gap-x-4 gap-y-4 lg:w-4/5 lg:grid-cols-4 lg:mx-auto sm: w-5/6 sm: py-5 mt-10">
            <CategoryList item={items} />
          </div>
        );
      }}
    </ConsumerContext>
  );
};
export default Tablets;
