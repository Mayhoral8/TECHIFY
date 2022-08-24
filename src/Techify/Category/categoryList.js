import React from "react";
import { ConsumerContext } from "../context";
import CategoryItem from "./categoryItem";
const CategoryList = ({ item }) => {
  console.log(item);

  return item.map((item) => {
    return <CategoryItem key={item.id} item={item} />;
  });
};
export default CategoryList;
