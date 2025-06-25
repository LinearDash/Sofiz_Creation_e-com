import React, { useEffect, useState } from "react";
import { useCategories } from "../../../hooks/useCategories";

const AdminProduct = () => {
  // const [categories, setCategories] = useState([]);
  const { data: Categeories } = useCategories();

  return (
    <div className=" min-h-screen">
      {/* will use map to make show all product in all catogory */}

      <div>
        {Categeories?.map((category) => {
          return (
            <div key={category._id}>
              {category.name}
              <div>{category._id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminProduct;
