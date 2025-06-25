import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategoryProducts } from "../../hooks/useCategoryProducts";
// import PropTypes from "prop-types";

const ProductCard = ({ id }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { data, isLoading, isError, error } = useCategoryProducts(id);

  useEffect(() => {
    if (data) {
      setName(data?.item_name || "");
      setPrice(data?.item_price || "");
      setImage(data?.item_image || "");
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="h-full bg-gray-100 rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="w-full h-60 bg-gray-300"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full bg-red-50 rounded-lg shadow-md overflow-hidden p-4">
        <p className="text-red-600">Error loading product: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-full bg-gray-50 rounded-lg shadow-md overflow-hidden p-4">
        <p className="text-gray-600">No product data available</p>
      </div>
    );
  }

  return (
    <Link to={`${id}`}>
      <div className="h-full w-70 ml-10 bg-orange-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={image || "/placeholder-image.jpg"}
          alt={name || "Product"}
          className="w-full h-60 object-cover border-b border-gray-200"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name || "Unknown Product"}
          </h3>
          <p className="text-gray-600 mt-2">
            ${price || "Price not available"}
          </p>
        </div>
        <button
          className="w-30 bg-blue-600 rounded-3xl text-white font-semibold mb-2 ml-2 px-4 py-2 hover:bg-blue-700 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            console.log(`Adding product ${id} to cart`);
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
