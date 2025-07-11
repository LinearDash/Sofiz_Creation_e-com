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
        {categories?.map(
          (
            category //Maping through the categories to get buttons for all the catogories
          ) => (
            <button
              key={category._id}
              className="px-4 py-2 bg-blue-500 text-white rounded m-3"
              onClick={() => handelClick(category.name)}
            >
              {category.name}
            </button>
          )
        )}
      </div>
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 pb-10">
          {categoryProduct.map((product) => (
            <ProductCard key={product._id} id={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
