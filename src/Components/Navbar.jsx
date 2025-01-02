import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white">
      <div className="font-bold text-lg">Vardabit</div>
      <div className="flex items-center bg-white rounded-md px-2">
        <i className="fa-solid fa-magnifying-glass text-black"></i>
        <input
          type="text"
          placeholder="Search"
          className="ml-2 p-1 outline-none text-gray-700"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-basket-shopping"></i>
          <span>117.000₺</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fa-regular fa-user"></i>
          <span>Bayram</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
