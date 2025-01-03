import React from "react";
import { useCart } from "../CartContext";

function ProductBox({ img, price, title, desc, id, handleProductClick }) {
  const { addToCart } = useCart();

  const handleBoxClick = (e) => {
    if (e.target.tagName === "BUTTON") return;

    handleProductClick(img, price, title, desc, id);
  };

  return (
    <div
      onClick={handleBoxClick}
      className="border rounded-lg p-4 shadow-md w-44 sm:w-56 cursor-pointer"
    >
      <div className="bg-gray-300 h-36 sm:h-44 rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <h1 className="text-blue-600 text-base sm:text-lg mt-3">{price} ₺</h1>

      <h1 className="text-gray-800 font-medium text-sm py-1 sm:py-2">
        {title}
      </h1>

      <button
        className="mt-3 bg-blue-600 text-white text-sm sm:text-base py-2 px-4 rounded-md w-full hover:bg-blue-700"
        onClick={() => addToCart({ id, name: title, price })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductBox;
