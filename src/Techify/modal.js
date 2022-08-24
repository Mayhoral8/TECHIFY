import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ConsumerContext } from "./context";
import Aos from "aos";
import "aos/dist/aos.css";

const Modal = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <ConsumerContext>
      {(value) => {
        const {
          handleOpenModal,
          handleCloseModal,
          openModal,
          detailProd,
          topScroll,
          setBarMode,
        } = value;
        const [{ img, title, price }] = detailProd;

        const ModalStyle = styled.div`
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          display: flex;
          z-index: 10;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
        `;
        if (!openModal) {
          return null;
        } else {
          return (
            <>
              <ModalStyle>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="600"
                  className={`bg-gray-50 h-80 rounded-sm space-y-2 w-60`}
                >
                  <h6 className="text-center mt-2">Item Added To Cart!</h6>
                  <img
                    src={require(`./${img}`)}
                    className="object-centre object-cover h-40 mx-auto my-2"
                  />
                  <h5 className="text-center">{title}</h5>
                  <h5 className="text-center text-orange-500 ">
                    Price: ${price}
                  </h5>
                  <div className="flex flex-row mx-auto justify-around mt-4">
                    <Link to="/cart">
                      <button
                        className="w-20 text-sm  bg-orange-500 rounded-sm h-8 text-gray-50"
                        onClick={() => {
                          handleCloseModal();
                          topScroll();
                          setBarMode(false);
                        }}
                      >
                        Go To Cart
                      </button>
                    </Link>
                    <button
                      className=" text-sm border-2 border-orange-400 rounded-sm w-24 text-orange-500"
                      onClick={() => handleCloseModal()}
                    >
                      Back To Store
                    </button>
                  </div>
                </div>
              </ModalStyle>
            </>
          );
        }
      }}
    </ConsumerContext>
  );
};
export default Modal;
