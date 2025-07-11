import React from "react";
import { Link } from "react-router";
import { SocialIcon } from "react-social-icons/component";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/threads";
import "react-social-icons/twitter";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-2xl font-bold">Sofiz Creation</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Connecting passionate artisans with customers who appreciate the beauty and 
              craftsmanship of handmade items. Every piece tells a unique story.
            </p>
            <div className="flex space-x-3">
              <SocialIcon
                network="instagram"
                href="https://www.instagram.com/sofiz_creation/"
                className="hover:scale-110 transition-transform duration-200"
              />
              <SocialIcon 
                network="facebook" 
                className="hover:scale-110 transition-transform duration-200"
              />
              <SocialIcon 
                network="threads" 
                className="hover:scale-110 transition-transform duration-200"
              />
              <SocialIcon 
                network="twitter" 
                className="hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/product" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Handmade Jewelry
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Artisan Crafts
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Home Decor
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <MdArrowForward className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MdEmail className="w-5 h-5 mr-3 text-blue-400" />
                <span>hello@sofizcreation.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MdPhone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+977 123-456-7890</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MdLocationOn className="w-5 h-5 mr-3 text-blue-400" />
                <span>Pokhara, Nepal</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sofiz Creation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                Privacy Policy
              </span>
              <span className="text-gray-400">
                Terms of Service
              </span>
              <span className="text-gray-400">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
