import { useQuery } from "@tanstack/react-query"; 

export const useCategoryProducts = (id)=>{
  return useQuery({
      queryKey: ["product", id],
      queryFn: async () => {
        try {
          const res = await fetch(`/api/product/getProductData/${id}`, {
            method: "GET",
          });
          
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
          }
          
          const data = await res.json();
          return data;
        } catch (error) {
          console.error("Error fetching product data:", error);
          throw error;
        }
      },
    
    });
}