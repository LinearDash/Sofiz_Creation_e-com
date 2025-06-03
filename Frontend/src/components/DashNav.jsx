import React from "react";
import { Link, Outlet } from "react-router";
import { MdOutlineLogout } from "react-icons/md";

function DashNav() {
  return (
    <>
      <nav className="flex justify-between items-center bg-neutral-900 text-white px-6 py-4 shadow-md">
        <h3 className="text-3xl font-bold hover:text-gray-300">DashBoard</h3>

        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/dashboard/product" className="hover:text-gray-300">
              Product
            </Link>
          </li>

          <li>
            <Link to="/dashboard/order" className="hover:text-gray-300">
              Orders
            </Link>
          </li>
          <button>
            <Link to="/">
              <MdOutlineLogout />
            </Link>
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default DashNav;
