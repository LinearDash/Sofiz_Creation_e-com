import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { useCategories } from "../../hooks/useCategories";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);

  const { data, isLoading, isError, error } = useCategories();

  const renderProduct = (categoryId) => {};

  useEffect(() => {
    if (data && data.length > 0) {
      // console.log(data[0].product[0]);
      setCategories(data);
      setCategoryProduct(data[0].product);
    }
  }, [data, categoryProduct]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center space-x-3">
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
      <div className="grid grid-cols-3 justify-items-center pt-10 pb-10 gap-y-6">
        {/* Product Card Section */}
        {categoryProduct.map((product) => {
          return <ProductCard key={product._id} id={product} />;
        })}
      </div>
    </>
  );
};

export default ProductPage;
