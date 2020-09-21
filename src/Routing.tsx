//@ts-nocheck

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Products, Cart} from './Pages';
import NavBar from './NavBar';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
