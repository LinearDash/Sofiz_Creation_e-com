import React from "react";
import { useParams } from "react-router";

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
const ProductDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const product = products.find((item) => item.id === id);
  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }
  return <div>hello this is product</div>;
};

export default ProductDetailPage;
