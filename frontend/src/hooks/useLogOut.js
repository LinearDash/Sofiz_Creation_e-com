import { useQuery } from "@tanstack/react-query";

export const useLogOut = () => {
  return useQuery({
    queryKey: ['Auth'],
    queryFn: async () => {
      try {
        const res = await fetch('/api/auth/logout', {
          method: "POST",
        });

        if (!res.ok) {
          throw new Error("Failed to log out");
        }

        const data = await res.json();
        return data; // Return the response data
      } catch (error) {
        console.error("Error in useLogOut:", error);
        return { error: "Failed to log out user" }; // Return an error object
      }
    },
  });
};