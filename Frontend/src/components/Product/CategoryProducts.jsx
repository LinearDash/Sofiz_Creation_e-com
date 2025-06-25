import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ categoryData }) => {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    setProducts(categoryData.product);
    // console.log(products);
  }, [categoryData]);
  if (!categoryData) {
    return <div>Category not found</div>;
  }
  return (
    <div>
      <div className="m-4 font-bold text-2xl">{categoryData.name}</div>
      <div className="flex flex-row">
        {products.map((product) => {
          return <ProductCard key={product.id} id={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
