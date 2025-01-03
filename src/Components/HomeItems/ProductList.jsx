import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";

function ProductList({ products, loading, changed, handleProductClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentItems, setCurrentItems] = useState(
    products.slice(indexOfFirstItem, indexOfLastItem)
  );

  // page değiştirme
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(products.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

  // filtreleme
  useEffect(() => {
    setCurrentPage(1);
    setCurrentItems(products.slice(indexOfFirstItem, indexOfLastItem));
  }, [changed]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  //ürün var mı yok mu
  if (currentItems.length === 0) {
    return (
      <div className="product-list flex justify-items-center items-center">
        <span className="text-xl text-gray-600 text-center w-full lg:px-48 ">
          There are not any products
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="product-list grid xl:grid-cols-3 grid-cols-2 gap-4 justify-items-center items-center">
        {currentItems.map((product) => (
          <ProductBox
            key={product.id}
            id={product.id}
            img={product.image}
            price={product.price}
            title={product.name}
            handleProductClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
      <div className="pagination flex justify-center items-center m-5">
        <i
          className="fa-solid fa-chevron-left text-sm mr-3 cursor-pointer"
          onClick={() => setCurrentPage(1)} // Go to first page
        ></i>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`py-2 px-3 mx-2 ${
              currentPage === index + 1
                ? "bg-white rounded-md text-blue-500 shadow-lg"
                : "text-gray-600"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <i
          className="fa-solid fa-chevron-right text-sm ml-3 cursor-pointer"
          onClick={() => setCurrentPage(totalPages)} // Go to last page
        ></i>
      </div>
    </>
  );
}

export default ProductList;
