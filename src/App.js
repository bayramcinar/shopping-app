import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./Components/HomeItems/MainHome";
import ProductDetailBox from "./Components/HomeItems/ProductDetailBox";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainHome />} />
        <Route path="/product/:id" element={<ProductDetailBox />} />
      </Routes>
    </div>
  );
};

export default App;
