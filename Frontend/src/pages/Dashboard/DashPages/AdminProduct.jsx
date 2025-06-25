import React, { useEffect, useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import ProductCard from "../../../components/Product/ProductCard";
import CategoryProducts from "../../../components/Product/CategoryProducts";

const AdminProduct = () => {
  // const [categories, setCategories] = useState([]);
  const { data: Categeories } = useCategories();

  return (
    <div className=" min-h-screen">
      {/* will use map to make show all product in all catogory */}

      <div>
        {Categeories?.map((category) => {
          return (
            <CategoryProducts key={category._id} categoryData={category} />
          );
        })}
      </div>
    </div>
  );
};

export default AdminProduct;
