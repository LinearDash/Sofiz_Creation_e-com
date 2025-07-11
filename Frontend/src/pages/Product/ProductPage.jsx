import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { useCategories } from "../../hooks/useCategories";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const { data, isLoading, isError, error } = useCategories(); //Using costume hook to fetch catogory data

  const handelClick = (categoryName) => {
    //when the button is clicked it sets the index of the clicked catogry in catogoryIndex
    const index = data.findIndex((item) => item.name === categoryName);
    setCategoryIndex(index);
  };
  useEffect(() => {
    if (data && data.length > 0) {
      //if there exists data setCategories to data and setCatogoryProduct to which catogory is selected
      setCategories(data);
      setCategoryProduct(data[categoryIndex].product);
    }
  }, [data, categoryIndex]); //when data or catogoryIndex changes the page re-renders

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center space-x-3">
        {categories?.map((category, idx) => {
          const isActive = idx === categoryIndex;
          return (
            <button
              key={category._id}
              className={`px-6 py-2 m-2 rounded-full font-semibold transition-all duration-200 shadow-sm border-2
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-700 shadow-lg scale-105"
                    : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-800"
                }
                focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onClick={() => handelClick(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      
      </div>
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 pb-10 min-h-[60vh]">
          {categoryProduct.map((product) => (
            <ProductCard key={product._id} id={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
