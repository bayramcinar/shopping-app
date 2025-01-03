import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import Navbar from "../Navbar";
import BasketBox from "../BasketItems/BasketBox";

function ProductDetailBox() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ürün detayını API'den al
  useEffect(() => {
    fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found.</div>;
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center m-4 lg:m-8">
        <div className="basketArea block lg:hidden mb-5">
          <BasketBox />
        </div>
        <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
          <div className="md:flex h-full">
            {/* Resim Konteyneri */}
            <div className="md:flex-shrink md:w-1/2 h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-lg font-bold text-blue-600">
                {product.price} ₺
              </p>
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                  })
                }
                className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <p className="mt-3 text-gray-600 text-sm">
                {product.description}
              </p>
            </div>
          </div>
        </div>
        <div className="basketArea hidden lg:block">
          <BasketBox />
        </div>
      </div>
    </>
  );
}

export default ProductDetailBox;
