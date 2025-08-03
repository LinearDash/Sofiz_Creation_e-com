import { useQuery } from "@tanstack/react-query";

export const useGetLoggedUser = () => {
  return useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "/api/auth/getme", // API url from backend
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        //To Check if there is a response from the fetching 
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching User:", error);
        return { error: "Failed to fetch User" };
      }
    }
  })
}