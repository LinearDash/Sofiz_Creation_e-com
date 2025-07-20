import { useQuery } from "@tanstack/react-query";

export const useGetProductData = (id) => {
  console.log(id);

  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`/api/product/${id}`);
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to fetch product data");
      }
      return res.json();
    },
    enabled: !!id, // Only run if id is provided
  });
}; 