import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-900 text-white px-6 py-4 shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-gray-300">
        Sofiz Creation
      </Link>

      <ul className="flex space-x-6">
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About us
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:text-gray-300">
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
