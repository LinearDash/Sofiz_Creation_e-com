import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategoryProducts } from "../../hooks/useCategoryProducts";
import { MdShoppingCart, MdFavorite } from "react-icons/md";

const ProductCard = ({ id }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { data, isLoading, isError, error } = useCategoryProducts(id);

  useEffect(() => {
    if (data) {
      setName(data?.item_name || "");
      setPrice(data?.item_price || "");
      setImage(data?.itemImg1 || "");
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse h-96 w-64">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-3">
          <div className="h-3 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3 mb-3"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center h-96 w-64 flex items-center justify-center">
        <p className="text-red-600 text-sm">Error loading product</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center h-96 w-64 flex items-center justify-center">
        <p className="text-gray-600 text-sm">No product data</p>
      </div>
    );
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Adding product ${id} to cart`);
    // Add your cart logic here
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Adding product ${id} to favorites`);
    // Add your favorite logic here
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 h-96 w-64 flex flex-col">
      <Link to={`${id}`} className="block flex-1 flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <img
            src={image || "/placeholder-image.jpg"}
            alt={name || "Product"}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/placeholder-image.jpg";
            }}
          />
          
          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200"
            title="Add to favorites"
          >
            <MdFavorite className="w-3.5 h-3.5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          
          {/* Price Badge */}
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
            <span className="text-sm font-bold text-gray-800">
              रू {price || "0"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 flex-1 flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 flex-1">
            {name || "Unknown Product"}
          </h3>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md mt-auto text-sm"
          >
            <MdShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
