import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "../context";

const CategoryItem = ({ item }) => {
  const { title, price, discount, img, inCart, id } = item;

  const color = "#ff7504e5";
  const color2 = "white";
  // const reff = useRef();
  const labelRef = useRef();
  // const iconRef2 = useRef()
  // const imgRef = useRef();
  return (
    <article className="bg-white shadow-sm rounded-sm">
      <ConsumerContext>
        {(value) => {
          let {
            handleDetail,
            product,
            setDetailProd,
            addToCart,
            handleOpenModal,
            handleSetCart,
          } = value;
          return (
            <>
              <div className="">
                <div className="top">
                  <div>
                    <div className="w-full" onClick={() => handleDetail(id)}>
                      <Link to="/details">
                        <img
                          src={require(`../${img}`)}
                          alt={img}
                          className="h-48 mt-2 mx-auto hover:scale-105 transition-all duration-500 ease-in object-cover object-center"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" details flex flex-row justify-between px-3 mb-2">
                  <div>
                    <h5 className="title">{title}</h5>
                    <h4 className="price text-lg text-orange-500">{`$${price}`}</h4>
                  </div>
                  <button
                    className="h-10 rounded-sm w-auto hover:text-orange-500"
                    style={{
                      backgroundColor: inCart ? " #ff7504e5" : color2,
                      color: inCart ? "#f3f3f3" : "black",
                    }}
                    disabled={inCart ? true : false}
                    onClick={() => {
                      addToCart(id);
                      handleOpenModal(id);
                      handleDetail(id);
                      handleSetCart(id);
                      if (inCart === true)
                        labelRef.current.style.color = "#f3f3f3";
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
export default CategoryItem;
