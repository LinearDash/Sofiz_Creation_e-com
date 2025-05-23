import React from "react";
import { useParams } from "react-router";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    description:
      "A sleek and modern smartwatch with fitness tracking, notifications, and customizable watch faces. It features a durable design, water resistance, and compatibility with both Android and iOS devices. Stay connected and monitor your health effortlessly.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$89.99",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    description:
      "High-quality wireless headphones with noise cancellation, immersive sound, and a comfortable over-ear design. Enjoy long battery life, quick charging, and seamless connectivity for an exceptional audio experience.",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "$79.99",
    image: "https://via.placeholder.com/300x200?text=Keyboard",
    description:
      "RGB backlit gaming keyboard with mechanical keys for precise and responsive typing. It includes customizable lighting effects, programmable keys, and a durable build for intense gaming sessions.",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$49.99",
    image: "https://via.placeholder.com/300x200?text=Speaker",
    description:
      "Portable Bluetooth speaker with deep bass, crystal-clear sound, and long battery life. Its compact design makes it easy to carry, and it is perfect for outdoor adventures, parties, or relaxing at home.",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: "$59.99",
    image: "https://via.placeholder.com/300x200?text=Fitness+Tracker",
    description:
      "Compact fitness tracker with heart rate monitoring, step counting, and sleep tracking. It offers detailed insights into your daily activities, helping you achieve your fitness goals with ease and style.",
  },
  {
    id: 6,
    name: "Drone Pro",
    price: "$399.99",
    image: "https://via.placeholder.com/300x200?text=Drone+Pro",
    description:
      "Professional-grade drone with a 4K camera, GPS navigation, and advanced stabilization technology. Capture stunning aerial footage, perform precise maneuvers, and enjoy an extended flight time for creative exploration.",
  },
];
const ProductDetailPage = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="p-8 text-center min-h-screen">Product not found.</div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-amber-200 h-200 w-screen m-20 p-10 rounded-2xl grid grid-cols-2 gap-4 shadow-2xl shadow-gray-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-3xl bg-neutral-500"
        />
        <div className="bg-neutral-500 rounded-3xl p-10">
          <h3 className="font-bold text-4xl border-b-2">{product.name}</h3>
          <p className="pt-10 font-extrabold text-2xl">{product.price}</p>
          <p className="h-1/2 border-b-2">{product.description}</p>
          <h3 className="text-4xl font-bold"> Get in Touch</h3>
          <p className="mt-5">@sofiz_creation on instagram</p>
          <div className="mt-10 flex space-x-2">
            <SocialIcon
              network="instagram"
              href="https://www.instagram.com/sofiz_creation/"
            />
            <SocialIcon network="facebook" />
            <SocialIcon network="threads" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
