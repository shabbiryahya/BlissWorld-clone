import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartmodal from "./Components/CartPage/Cartmodal";
import Checkout from "./Components/CartPage/Checkout";
import LandingPage from "./Components/LandingPage/LandingPage";
import { ProductDescription } from "./Components/ProductPage/ProductDescription/ProductDescription";
import { ProductList } from "./Components/ProductPage/ProductList/ProductList";

export const AllRoutes = () => {
  let endPoint = "bestSeller";
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />  */}
        {/* <Route path="/bestSeller" element={<ProductList endPoint={endPoint}/>} />  */}
        <Route path="/product" element={<ProductList />} />
        <Route path="/:endpoint/:id" element={<ProductDescription />} />
        <Route path="/cart" element={<Cartmodal />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};
