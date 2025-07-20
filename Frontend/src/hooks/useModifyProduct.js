import { useMutation } from "@tanstack/react-query";

export const useModifyProduct = (id) => {
  return useMutation({
    mutationFn: async (updatedData) => {
      try {
        const res = await fetch(`/api/modifyProduct/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
      }
    },
  });
};
