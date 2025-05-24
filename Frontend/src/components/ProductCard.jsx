import React from "react";
import { Link } from "react-router";

const ProductCard = ({ name, price, image, id }) => {
  return (
    <Link to={`${id}`}>
      <div className="h-full bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover border-b border-gray-200"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <p className="text-gray-600 mt-2">{price}</p>
        </div>
        <button className="w-30 bg-blue-600 rounded-3xl text-white font-semibold mb-2 ml-2">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
