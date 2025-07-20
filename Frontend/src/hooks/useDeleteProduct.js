import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteProduct = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (id) => {
      try {
        const res = await fetch(`/api/product/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Failed to delete product");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Categories"] });
      navigate("/dashboard/product");
    },
    enabled: !!id,
  });
};