import React from "react";

function ProductBox({ img, price, title }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-56">
      <div className="bg-gray-300 h-44 rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <h1 className="text-blue-600 text-lg mt-4">{price} ₺</h1>

      <h1 className="text-gray-800 font-medium text-sm py-2">{title}</h1>

      <button className="mt-4 bg-blue-600 text-white text-sm py-2 px-4 rounded-md w-full hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductBox;
