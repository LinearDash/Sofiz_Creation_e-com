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
      <button onClick={() => {
        window.location.href = "/dashlogin";
      }}>Login</button>
    </ErrorPage>;
  }
  return children;
}

export default ProtectedRoute;