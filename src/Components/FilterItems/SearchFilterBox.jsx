import React, { useState } from "react";

function SearchFilterBox({
  options,
  title,
  selectedOptions,
  setSelectedOptions,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full xl:w-auto">
      <h4 className="text-gray-600 font-light mb-2 px-5 xl:p-5 pb-0 text-sm ">
        {title}
      </h4>
      <div className="border rounded p-4 shadow-sm  m-5 mt-2">
        <div className="flex items-center bg-white rounded-md px-3 py-1 mb-3">
          <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 ml-2 outline-none"
          />
        </div>
        <div className="max-h-40 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700 text-sm lg:text-base">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFilterBox;
