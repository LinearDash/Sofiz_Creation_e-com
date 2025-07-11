import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { SocialIcon } from "react-social-icons/component";
import { MdShoppingCart, MdFavorite, MdShare } from "react-icons/md";
import "react-social-icons/instagram";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Product", id],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/product/getProductData/${id}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        const result = await res.json();
        return result;
      } catch (error) {
        console.error("Error fetching product data:", error);
        throw new Error("Failed to fetch product data");
      }
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading product details</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Adding ${data.item_name} to cart`);
    // Add your cart logic here
  };

  const handleFavorite = () => {
    console.log(`Adding ${data.item_name} to favorites`);
    // Add your favorite logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>/</li>
            <li><a href="/product" className="hover:text-blue-600">Products</a></li>
            <li>/</li>
            <li className="text-gray-900">{data.item_name}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-100">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={data.itemImg1 || "/placeholder-image.jpg"}
                  alt={data.item_name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/placeholder-image.jpg";
                  }}
                />
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={handleFavorite}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  title="Add to favorites"
                >
                  <MdFavorite className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                <button
                  onClick={() => navigator.share?.({ title: data.item_name, url: window.location.href })}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  title="Share"
                >
                  <MdShare className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
                </button>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {data.item_name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl lg:text-3xl font-bold text-blue-600">
                      रू {data.item_price}
                    </span>
                    <span className="text-sm text-gray-500">NRS</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <div className="pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    <MdShoppingCart className="w-6 h-6" />
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* Contact Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <p className="text-gray-700 mb-4">
                    Follow us on social media for more updates and custom orders!
                  </p>
                  
                  <div className="flex space-x-3">
                    <SocialIcon
                      network="instagram"
                      href="https://www.instagram.com/sofiz_creation/"
                      className="hover:scale-110 transition-transform"
                    />
                    <SocialIcon 
                      network="facebook" 
                      className="hover:scale-110 transition-transform"
                    />
                    <SocialIcon 
                      network="threads" 
                      className="hover:scale-110 transition-transform"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-3">
                    @sofiz_creation on Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
