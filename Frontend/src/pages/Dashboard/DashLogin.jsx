import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DashLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const {
    mutate: login,
    isError,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Login failed");
        }

        return data;
      } catch (error) {
        throw new Error(error.message || "Something went wrong");
      }
    },
    onSuccess: (data) => {
      // Check if user is admin
      if (data.role === "admin") {
        // Navigate to dashboard
        navigate("/dashboard");
        // Invalidate auth queries to reload UI
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
      } else {
        throw new Error("Access denied. Admin privileges required.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-neutral-400 h-100 w-200 rounded-3xl p-10 flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            className="mb-9 p-2 rounded border border-gray-300 bg-amber-50"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-9 p-2 rounded border border-gray-300 bg-amber-50"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-yellow-200 w-20 rounded-lg mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          {isError && (
            <p className="text-red-500 mt-2 text-sm">{error.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default DashLogin;
