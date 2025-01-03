import React from "react";

function SelectFilterBox({ selectedOption, setSelectedOption, options }) {
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3 className="text-gray-600 text-sm font-light text-left px-5 ">
        Sort By
      </h3>
      <div className="p-4 bg-white shadow-md rounded-md m-5 mt-2">
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-600 text-sm lg:text-base">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectFilterBox;
