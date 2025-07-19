import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import {
  MdOutlineLogout,
  MdMenu,
  MdClose,
  MdDashboard,
  MdInventory,
  MdShoppingCart,
} from "react-icons/md";
import { useMutation } from "@tanstack/react-query";

import ProtectedRoutes from "./Common/ProtectedRoutes";
function DashNav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important: include cookies
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }

      return res.json();
    },
    onSuccess: () => {
      // Clear any local state or cache
      localStorage.removeItem("user");
      sessionStorage.clear();

      // Redirect to home page
      navigate("/");

      // Optional: Show success message
      alert("Logged out successfully!");
    },
    onError: (error) => {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ProtectedRoutes>
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MdDashboard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Dashboard</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <MdDashboard className="w-4 h-4" />
                <span>Analytics</span>
              </Link>
              <Link
                to="/dashboard/product"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <MdInventory className="w-4 h-4" />
                <span>Products</span>
              </Link>
              <Link
                to="/dashboard/order"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <MdShoppingCart className="w-4 h-4" />
                <span>Orders</span>
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 disabled:bg-gray-600"
                title="Logout"
              >
                <MdOutlineLogout className="w-4 h-4" />
                <span>
                  {logoutMutation.isPending ? "Logging out..." : "Logout"}
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <MdClose className="w-6 h-6" />
                ) : (
                  <MdMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdDashboard className="w-4 h-4" />
                  <span>Analytics</span>
                </Link>
                <Link
                  to="/dashboard/product"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdInventory className="w-4 h-4" />
                  <span>Products</span>
                </Link>
                <Link
                  to="/dashboard/order"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdShoppingCart className="w-4 h-4" />
                  <span>Orders</span>
                </Link>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    disabled={logoutMutation.isPending}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:bg-gray-600"
                  >
                    <MdOutlineLogout className="w-4 h-4" />
                    <span>
                      {logoutMutation.isPending ? "Logging out..." : "Logout"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </ProtectedRoutes>
  );
}

export default DashNav;
