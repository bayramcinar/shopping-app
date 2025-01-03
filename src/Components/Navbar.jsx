import React from "react";
import { useCart } from "./CartContext";

function Navbar({ navbarSearch, setNavbarSearch }) {
  const { totalPrice } = useCart();

  const handleSearchChange = (event) => {
    setNavbarSearch(event.target.value);
  };

  return (
    <div className="bg-blue-600 text-white px-4 py-4 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg">Vardabit</div>
        <div className="items-center bg-white rounded-md px-2 w-48 sm:w-64 hidden sm:flex">
          <i className="fa-solid fa-magnifying-glass text-gray-700"></i>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-1 outline-none text-gray-700 w-full"
            value={navbarSearch}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-basket-shopping"></i>
            <span>{totalPrice} ₺</span>
          </div>
          <div className="flex items-center space-x-2 font-light">
            <i className="fa-regular fa-user"></i>
            <span>Bayram</span>
          </div>
        </div>
      </div>
      <div className="sm:hidden mt-4 flex justify-between items-center">
        <div className="flex items-center bg-white rounded-md px-2 w-full">
          <i className="fa-solid fa-magnifying-glass text-gray-700"></i>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-1 outline-none text-gray-700 w-full"
            value={navbarSearch}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
