import React from "react";

const DashLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-neutral-400 h-100 w-200 rounded-3xl p-10 flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-6">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-9 p-2 rounded border border-gray-300 bg-amber-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-9 p-2 rounded border border-gray-300 bg-amber-50"
        />
        <button className="bg-yellow-200 w-20 rounded-lg mt-5">login</button>
      </div>
    </div>
  );
};

export default DashLogin;
