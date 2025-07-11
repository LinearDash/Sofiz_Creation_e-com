import React from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { MdOutlineLogout } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";

function DashNav() {
  const navigate = useNavigate();

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
          <button
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
            className="hover:text-gray-300 flex items-center gap-1"
            title="Logout"
          >
            <MdOutlineLogout />
            {logoutMutation.isPending ? "Logging out..." : "Logout"}
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default DashNav;
