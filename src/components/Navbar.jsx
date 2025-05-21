import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-900 text-white px-6 py-4 shadow-md">
      <a href="/" className="text-2xl font-bold hover:text-gray-300">
        Page Name
      </a>
      <ul className="flex space-x-6">
        <li>
          <a href="/social" className="hover:text-gray-300">
            Social
          </a>
        </li>
        <li>
          <a href="/product" className="hover:text-gray-300">
            Product
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
