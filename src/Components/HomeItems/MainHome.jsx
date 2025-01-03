import React, { useState, useEffect } from "react";
import SelectFilterBox from "../FilterItems/SelectFilterBox";
import ProductList from "./ProductList";
import SearchFilterBox from "../FilterItems/SearchFilterBox";
import axios from "axios";
import BasketBox from "../BasketItems/BasketBox";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function MainHome() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(true);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const navigate = useNavigate();

  const [navbarSearch, setNavbarSearch] = useState("");

  const [selectedOptionsBrand, setSelectedOptionsBrand] = useState([]);
  const [selectedOptionsModel, setSelectedOptionsModel] = useState([]);

  const [selectedOption, setSelectedOption] = useState("Old to new");

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const options = [
    "Old to new",
    "New to old",
    "Price high to low",
    "Price low to high",
  ];

  //ilk veri alımı
  useEffect(() => {
    axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((response) => {
        const data = response.data;

        const uniqueBrands = [...new Set(data.map((product) => product.brand))];
        const uniqueModels = [...new Set(data.map((product) => product.model))];

        setProducts(data);
        setFilteredProducts(data);
        setBrands(uniqueBrands);
        setModels(uniqueModels);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  //navbar search
  useEffect(() => {
    if (navbarSearch) {
      setChanged(!changed);

      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(navbarSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setChanged(!changed);
      setFilteredProducts(products);
    }
  }, [navbarSearch, products]);

  //filtreleme işlemleri
  useEffect(() => {
    let filtered = filteredProducts;
    setChanged(!changed);
    if (selectedOptionsBrand.length > 0) {
      filtered = filtered.filter((product) =>
        selectedOptionsBrand.includes(product.brand)
      );
    }

    if (selectedOptionsModel.length > 0) {
      filtered = filtered.filter((product) =>
        selectedOptionsModel.includes(product.model)
      );
    }
    if (selectedOption === "Old to new") {
      filtered = filtered.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (selectedOption === "New to old") {
      filtered = filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (selectedOption === "Price high to low") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else if (selectedOption === "Price low to high") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedOptionsBrand, selectedOptionsModel, selectedOption, products]);

  return (
    <>
      <Navbar navbarSearch={navbarSearch} setNavbarSearch={setNavbarSearch} />
      <div className="flex flex-col lg:flex-row justify-center m-4 lg:m-8">
        <div className="filterArea flex flex-col">
          <SelectFilterBox
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className="flex flex-row lg:flex-col items-center lg:justify-center flex-wrap">
            <SearchFilterBox
              options={brands}
              title={"Brands"}
              selectedOptions={selectedOptionsBrand}
              setSelectedOptions={setSelectedOptionsBrand}
            />
            <SearchFilterBox
              options={models}
              title={"Models"}
              selectedOptions={selectedOptionsModel}
              setSelectedOptions={setSelectedOptionsModel}
            />
          </div>
          <div className="basketArea block lg:hidden mb-5">
            <BasketBox />
          </div>
        </div>
        <div className="productListArea">
          <ProductList
            handleProductClick={handleProductClick}
            changed={changed}
            loading={loading}
            products={filteredProducts}
            setLoading={setLoading}
            setProducts={setProducts}
          />
        </div>
        <div className="basketArea hidden lg:block">
          <BasketBox />
        </div>
      </div>
    </>
  );
}

export default MainHome;
