import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Components/HomeItems/ProductList";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default App;
