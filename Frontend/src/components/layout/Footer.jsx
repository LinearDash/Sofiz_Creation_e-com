import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/threads";
import "react-social-icons/twitter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left section (Brand or Logo) */}
        <div className="text-lg font-semibold">
          <a
            href="/"
            className="hover:text-gray-300 transition text-2xl border-b-2 border-neutral-500"
          >
            Sofiz Creation
          </a>
        </div>
        <div className="">
          <h1 className="font-bold text-sm">FOLLOW US</h1>
          <div className="grid grid-cols-2 gap-2">
            <SocialIcon
              network="instagram"
              href="https://www.instagram.com/sofiz_creation/"
            />
            <SocialIcon network="facebook" />
            <SocialIcon network="threads" />
            <SocialIcon network="twitter" />
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 bg-gray-800 text-center h-5 pt-1">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
