import React from "react";
import CategoryList from "./categoryList";
import { ConsumerContext } from "../context";

const Category = () => {
  return (
    <ConsumerContext>
      {(value) => {
        const { cart, addCartList, category } = value;

        if (category.length > 0) {
          return (
            <>
              <CategoryList value={value} />
            </>
          );
        } else {
          return (
            <>
              <h5 className="text-center text-xl my-3 ">
                Cart Is Currently Empty
              </h5>
              {/* <img src={EmptyCart} alt = '' className='mx-auto h-60 my-auto'/> */}
            </>
          );
        }
      }}
    </ConsumerContext>
  );
};
export default Category;
//         <ConsumerContext>
// {
//     (value => {

//         const {category} = value
//         console.log(value)
//             return <CategoryList props = {value}/>
//         //     if (category.length > 1){
//         //     return <CategoryList value = {value}/>
//         // } else {
//         //     return <h3>Nothing in that category</h3>
//         // }
//     })
// }
// </ConsumerContext>
