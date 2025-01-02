import React from "react";
import Navbar from "../Navbar";
import ProductBox from "./ProductBox";

function ProductList() {
  return (
    <>
      <Navbar />
      <ProductBox
        img={"https://loremflickr.com/640/480/food"}
        price={"51.00"}
        title={"Bentley Focus"}
      />
    </>
  );
}

export default ProductList;
