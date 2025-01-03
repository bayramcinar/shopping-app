import React from "react";
import { useCart } from "../CartContext";

function BasketBox() {
  const { cartItems, updateQuantity, totalPrice } = useCart();

  return (
    <div className="flex flex-col items-start">
      <h4 className="text-gray-600 font-light text-sm px-5">Cart</h4>
      <div className="border rounded p-4 shadow-md bg-white m-5 w-[90%] xl:w-80">
        <div className="space-y-4 max-h-[300px] overflow-y-scroll px-3 ">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="text-gray-800 font-medium text-sm lg:text-base">
                    {item.name}
                  </p>
                  <p className="text-blue-600 text-sm">
                    {item.price.toLocaleString()}₺
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-200 text-gray-600 font-semibold px-3 py-1 rounded-s"
                  >
                    -
                  </button>
                  <span className=" bg-blue-600 text-white px-3 py-1">
                    {item.amount}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-gray-200 text-gray-600 font-semibold px-3 py-1 rounded-e"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <h4 className="text-gray-600 font-light text-sm px-5">Checkout</h4>
      <div className="border rounded p-4 shadow-md bg-white m-5 mb-0 w-[90%] xl:w-80">
        <p className="text-lg mb-4">
          Total Price:
          <span className="text-blue-600 text-lg ml-2">
            {totalPrice.toLocaleString()}₺
          </span>
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default BasketBox;
