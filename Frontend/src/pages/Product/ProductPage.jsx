import React from "react";
import ProductCard from "../../components/ProductCard";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$89.99",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "$79.99",
    image: "https://via.placeholder.com/300x200?text=Keyboard",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$49.99",
    image: "https://via.placeholder.com/300x200?text=Speaker",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: "$59.99",
    image: "https://via.placeholder.com/300x200?text=Fitness+Tracker",
  },
  {
    id: 6,
    name: "Drone Pro",
    price: "$399.99",
    image: "https://via.placeholder.com/300x200?text=Drone+Pro",
  },
];
// Product Page
const ProductPage = () => {
  return (
    <div className="py-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          // console.log(`The id of ${product.name} is ${product.id}`);
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
