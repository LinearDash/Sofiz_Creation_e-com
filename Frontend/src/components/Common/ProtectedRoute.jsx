import { isUserAdmin } from "../../utils/permissions";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "./Error";

const ProtectedRoute = ({children}) => {
  const {data:user, isLoading, error} = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/getme", {
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  })
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorPage title="Error" message={error.message} />;
  }
  if(!isUserAdmin(user)) {
    return <ErrorPage title="Unauthorized" message="You are not authorized to access this page" >
      <button
        onClick={() => {
          window.location.href = "/dashlogin";
        }}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Login
      </button>
    </ErrorPage>;
  }
  return children;
}

export default ProtectedRoute;