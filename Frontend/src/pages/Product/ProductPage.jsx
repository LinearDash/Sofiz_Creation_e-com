import React from "react";
import ProductCard from "../../components/Product/ProductCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const ProductPage = () => {
  const { data } = useQuery({
    queryKey: ["catogory"],
    queryFn: async () => {},
  });

  return (
    <div className="py-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryData?.map((category) => (
          <ProductCard
            id={category.id}
            key={category.id}
            name={category.name}
            price={category.price}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
