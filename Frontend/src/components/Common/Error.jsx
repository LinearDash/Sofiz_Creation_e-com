import React from "react";

const Error = ({ title, descrioption, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">{title}</h1>
      <p className="text-gray-500 mt-4">{descrioption}</p>
      {children}
    </div>
  );
};

export default Error;
