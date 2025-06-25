import { useQuery } from "@tanstack/react-query";

export const useCategories=()=>{
  return useQuery({
    queryKey:["Categories"],
    queryFn:async()=>{
      try {
        const res = await fetch(
          "/api/product/getAllCategories",//  API url from backend
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        }
        )
        //To Check if thers is a response from the fetching 
        if(!res.ok){
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        return { error: "Failed to fetch categories" };
      }
    }
  })
}