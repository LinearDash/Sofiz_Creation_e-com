import React from "react";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "./Error";
import USER_ROLES from "../../const/user-roles";
import { isUserAdmin } from "../../utils/permissions";
const ProtectedRoutes = ({ children }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/getme", {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }
        return res.json();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !user) {
    return (
      <ErrorPage title="Error" descrioption="Failed to fetch user">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            window.location.href = "/dashlogin";
          }}
        >
          Go to Login
        </button>
      </ErrorPage>
    );
  }
  if (!isUserAdmin(user)) {
    return (
      <ErrorPage
        title="Error"
        descrioption="You are not authorized to access this page"
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            window.location.href = "/dashlogin";
          }}
        >
          Go to Login
        </button>
      </ErrorPage>
    );
  }
  return children;
};

export default ProtectedRoutes;
