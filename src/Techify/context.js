import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { useState, useEffect } from "react";
import Cart from "./cart";
import Modal from "./modal";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [detailProd, setDetailProd] = useState(detailProduct);
  const [addCartList, setAddCartList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(+1);
  const [price, setPrice] = useState();
  const [category, SetCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [barMode, setBarMode] = useState("");

  useEffect(() => {
    setProducts();
  }, []);
  const setProducts = () => {
    let tempProduct = [];

    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    setProduct(() => {
      return tempProduct;
    });
  };
  const getItem = (id) => {
    const itemGet = product.filter((item) => {
      return item.id === id;
    });
    return itemGet;
  };

  const handleOpenModal = () => {
    setOpenModal(() => {
      return true;
    });
  };

  const handleSetCart = (id) => {
    setCart(() => {
      const cartItem = getItem(id);

      return [...cart, ...cartItem];
    });
  };

  const addToCart = (id) => {
    const tempProduct = [...product];
    const productIndex = tempProduct.indexOf(...getItem(id));

    const finProduct = tempProduct[productIndex];

    finProduct.inCart = true;
    finProduct.count = 1;
    const price = finProduct.price;
    finProduct.total = price;

    setCart(() => {
      return [...cart, finProduct];
    });
  };

  useEffect(() => {
    totalFunc();
  }, [cart]);
  const totalFunc = () => {
    let total = 0;
    return cart.map((item, i) => {
      total += item.total;
      console.log(total);
      setTotal(() => {
        return total;
      });
    });
  };

  const handleDetail = (id) => {
    setDetailProd(() => {
      const finalItem = [...getItem(id)];
      return finalItem;
    });
  };

  const handleCloseModal = () => {
    setOpenModal(() => {
      return false;
    });
  };

  const increment = (id) => {
    const tempCart = [...cart];
    const itemGet = getItem(id);
    console.log(itemGet, cart);
    const indexOfItem = tempCart.indexOf(...itemGet);
    const itemGet2 = tempCart[indexOfItem];
    itemGet2.count += 1;
    itemGet2.total = itemGet2.count * itemGet2.price;
    console.log(itemGet2.total);
    setCart((prev) => {
      return [...tempCart];
    });
  };

  const removeItem = (id) => {
    const tempCart = [...product];
    const itemGet = getItem(id);
    const indexOfItem = tempCart.indexOf(...itemGet);
    const currentItem = tempCart[indexOfItem];
    currentItem.inCart = false;
    setProduct(() => {
      return [...tempCart];
    });

    const itemFinal = cart.filter((itemFinal) => {
      return itemFinal.id !== id;
    });

    setCart((prev) => {
      return itemFinal;
    });
  };

  const decrement = (id) => {
    const tempCart = [...cart];
    const itemGet = getItem(id);
    const indexOfItem = tempCart.indexOf(...itemGet);
    let currentItem = tempCart[indexOfItem];
    if (currentItem.count >= 1) {
      currentItem.count -= 1;
      currentItem.total = currentItem.count * currentItem.price;
      console.log(currentItem.total);
      setCart(() => {
        return [...tempCart];
      });
    } else if (currentItem.count === 0 || currentItem.count === 2) {
      removeItem(id);
    }
  };

  const topScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setDetailProd,
        detailProd,
        handleDetail,
        addToCart,
        addCartList,
        openModal,
        handleOpenModal,
        handleCloseModal,
        cart,
        setCart,
        removeItem,
        increment,
        decrement,
        handleSetCart,
        category,
        open,
        setOpen,
        topScroll,
        total,
        totalFunc,
        setBarMode,
        barMode,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
const ConsumerContext = ProductContext.Consumer;
export { ProductProvider, ConsumerContext };
