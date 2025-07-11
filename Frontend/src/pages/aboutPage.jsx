import React from "react";
import { Link } from "react-router";
import { MdArrowForward, MdFavorite, MdLightbulb, MdPeople, MdStar, MdHandshake, MdBrush, MdLocalShipping } from "react-icons/md";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Our Story
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We believe that every product has a story—and that story begins with human hands. 
            Our platform is dedicated to showcasing beautifully handcrafted items made with love, 
            care, and a commitment to authenticity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To connect passionate artisans with customers who appreciate the beauty and 
                craftsmanship of handmade items. We believe in preserving traditional techniques 
                while embracing modern innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece in our collection tells a unique story of creativity, dedication, 
                and cultural heritage. From intricate jewelry to handcrafted home decor, 
                each item reflects the skill and passion of our talented artisans.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <MdLightbulb className="w-12 h-12 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform for authentic handcrafted products, 
                supporting artisans worldwide and bringing their unique creations to 
                customers who value quality, authenticity, and the human touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MdFavorite className="w-12 h-12 text-red-500" />,
                title: "Passion",
                desc: "We're passionate about craftsmanship and the stories behind every piece.",
              },
              {
                icon: <MdHandshake className="w-12 h-12 text-blue-500" />,
                title: "Authenticity",
                desc: "Every product is genuine, handcrafted, and tells a unique story.",
              },
              {
                icon: <MdBrush className="w-12 h-12 text-purple-500" />,
                title: "Creativity",
                desc: "We celebrate artistic expression and innovative design approaches.",
              },
              {
                icon: <MdPeople className="w-12 h-12 text-green-500" />,
                title: "Community",
                desc: "Building connections between artisans and customers worldwide.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Sofiz Creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sandesh Adhikari",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                desc: "Passionate about connecting artisans with customers worldwide."
              },
              {
                name: "Creative Team",
                role: "Artisan Partners",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop",
                desc: "Skilled craftsmen and women who bring our vision to life."
              },
              {
                name: "Support Team",
                role: "Customer Success",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
                desc: "Dedicated to ensuring your shopping experience is exceptional."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that tell our story of growth and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Artisan Partners" },
              { number: "10K+", label: "Happy Customers" },
              { number: "5K+", label: "Handcrafted Items" },
              { number: "50+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <MdStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">What Our Community Says</h2>
          <blockquote className="italic text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            "Sofiz Creation has transformed how I think about shopping. Every piece I've purchased 
            has a story and a soul. It's like bringing a piece of someone's heart into my home."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Maria Chen</p>
              <p className="text-gray-600">Loyal Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover the beauty of handcrafted treasures and become part of our growing family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/product"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Products
              <MdArrowForward className="w-5 h-5" />
            </Link>
            <Link 
              to="/product"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
