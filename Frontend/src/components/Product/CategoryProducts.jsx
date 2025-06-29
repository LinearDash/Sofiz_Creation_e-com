import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import AddProductButton from "../Common/AddproductButton";
import Modal from "../Common/Modal";
import AddProductForm from "./AddProductForm";

const CategoryProducts = ({ categoryData }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModelOpen] = useState(false);

  const handelClick = () => {
    setIsModelOpen(true);
  };

  useEffect(() => {
    setProducts(categoryData.product);
  }, [categoryData]);
  if (!categoryData) {
    return <div>Category not found</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="m-4 font-bold text-2xl">{categoryData.name}</h1>

        <button
          className="m-4 font-medium text-3xl text-white bg-black w-7 rounded-md"
          onClick={handelClick}
        >
          +
        </button>
      </div>

      <div className="overflow-auto flex flex-row gap-x-7 pl-5 pb-2">
        {products.map((product) => {
          return <ProductCard key={product.id} id={product} />;
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModelOpen(false)}>
        <AddProductForm categoryName={categoryData.name} />
      </Modal>
    </div>
  );
};

export default CategoryProducts;
