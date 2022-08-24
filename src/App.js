import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Techify/productList";
import "./index.css";
import Details from "./Techify/details";
import Cart from "./Techify/cart";
import Default from "./Techify/default";
import Navbar from "./Techify/navbar";
import Modal from "./Techify/modal";
import Category from "./Techify/Category/category";
import Tablets from "./Techify/Category/tablets";
import Laptops from "./Techify/Category/laptops";
import Smartphones from "./Techify/Category/smartphones";
import Accessories from "./Techify/Category/accessories";
import Footer from "./Techify/footer";
class App extends Component {
  render() {
    return (
      <>
        <div className=" bg-gray-50">
          <Navbar />
          <Modal />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<Default />} />
            <Route path="/category/smartphones" element={<Smartphones />} />
            <Route path="/category/laptops" element={<Laptops />} />
            <Route path="/category/tablets" element={<Tablets />} />
            <Route path="/category/accessories" element={<Accessories />} />
          </Routes>
          <Footer />
        </div>
      </>
    );
  }
}
export default App;
