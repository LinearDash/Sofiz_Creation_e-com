import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { useQuery } from "@tanstack/react-query";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/api/product/getAllCategories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      // Check for errors after parsing
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      console.log("Response status:", res.status);
      console.log("Data received:", data);

      return data;
    },
  });

  const renderProduct = (categoryId) => {};

  useEffect(() => {
    if (data && data.length > 0) {
      // console.log(data[0].product[0]);
      setCategories(data);
      setCategoryProduct(data[0].product);
    }
    console.log(categoryProduct);
  }, [data, categoryProduct]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center space-x-4">
        {categories?.map((category) => (
          <button
            key={category._id}
            className="px-4 py-2 bg-blue-500 text-white rounded m-3"
            onClick={renderProduct}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div>
        {/* Product Card Section */}
        {categoryProduct.map((product) => {
          return <ProductCard key={product._id} id={product} />;
        })}
      </div>
    </>
  );
};

export default ProductPage;
