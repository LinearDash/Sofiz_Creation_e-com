import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductCard = ({ id }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  console.log(`Id coming into productcard.jsx: ${id}`);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id], // Include id in queryKey to make it unique per product
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/product/getProductData/${id}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      console.log(`Product data for ${id}:`, data);
      return data;
    },
    enabled: !!id, // Only run query if id exists
  });

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setPrice(data.price || "");
      setImage(data.itemImg1 || "");
    }
  }, [data]);

  // Handle loading and error states
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
      <div className="h-full bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={image || "/placeholder-image.jpg"}
          alt={name || "Product"}
          className="w-full h-60 object-cover border-b border-gray-200"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg"; // Fallback image
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
            e.preventDefault(); // Prevent Link navigation when clicking the button
            // Add your cart logic here
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
