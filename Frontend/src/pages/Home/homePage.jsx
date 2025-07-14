import React from "react";
import { Link } from "react-router";
import { MdArrowForward, MdStar, MdLocalShipping, MdSecurity, MdFavorite } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Something Special for Someone Special
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Discover beautifully handcrafted items made with love, care, and a commitment to authenticity. 
            Each piece tells a unique story of craftsmanship and passion.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/product"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Products
              <MdArrowForward className="w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Sofiz Creation?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in the power of handmade craftsmanship and the stories behind every creation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdFavorite className="w-12 h-12 text-red-500" />,
                title: "Handcrafted with Love",
                desc: "Every item is carefully crafted by skilled artisans who pour their heart and soul into each piece, ensuring unique and meaningful creations.",
              },
              {
                icon: <MdLocalShipping className="w-12 h-12 text-blue-500" />,
                title: "Quality Guaranteed",
                desc: "We use only the finest materials and maintain strict quality standards to deliver products that exceed your expectations.",
              },
              {
                icon: <MdSecurity className="w-12 h-12 text-green-500" />,
                title: "Authentic & Unique",
                desc: "Each piece is one-of-a-kind, reflecting the individuality and creativity of our artisans. No two items are exactly alike.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of handcrafted treasures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Handmade Jewelry",
                desc: "Unique pieces that tell your story",
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
                link: "/product"
              },
              {
                title: "Artisan Crafts",
                desc: "Traditional techniques meet modern design",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
                link: "/product"
              },
              {
                title: "Home Decor",
                desc: "Transform your space with handmade beauty",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
                link: "/product"
              }
            ].map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <div className="bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/product"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Products
              <MdArrowForward className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <MdStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">What Our Customers Say</h2>
          <blockquote className="italic text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
            "The attention to detail and craftsmanship in every piece is absolutely incredible. 
            I love knowing that each item has a story and was made with such care and passion."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Sandesh.dev</p>
              <p className="text-gray-400">Happy Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of customers who have discovered the beauty of handcrafted treasures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/product"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Start Shopping
              <MdArrowForward className="w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
