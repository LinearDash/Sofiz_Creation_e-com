import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{price}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
