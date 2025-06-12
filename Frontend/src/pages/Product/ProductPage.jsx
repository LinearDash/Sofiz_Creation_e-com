import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Category from "../../../../Backend/Models/category.model";

const ProductPage = () => {
  const { categories, setCategories } = useState([]);
  const queryClient = useQueryClient();

  const { data, refetch } = useQuery({
    queryKey: ["catogory"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:3050/api/product/getAllCategories"
      );
      const data = await response.json();
      return data;
    },
  });

  useEffect(() => {
    // Prefetch the categories data
    queryClient.prefetchQuery(["catogory"], async () => {
      const response = await fetch(
        "http://localhost:3050/api/product/getAllCategories"
      );
      const data = await response.json();
      return data;
    });
    refetch();
  }, [queryClient, refetch]);
  return (
    <div className="py-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((category) => (
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
