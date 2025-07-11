import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import CategoryProducts from "../../../components/Product/CategoryProducts";
import AddCategoryForm from "../../../components/Product/AddCategoryForm";
import AddProductForm from "../../../components/Product/AddProductForm";
import Modal from "../../../components/Common/Modal";
import { MdAdd, MdCategory } from "react-icons/md";

const AdminProduct = () => {
  const { data: Categories, refetch } = useCategories();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = async (categoryData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/product/createCategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(categoryData),
      });

      if (!response.ok) {
        throw new Error('Failed to add category');
      }

      // Refetch categories to update the list
      await refetch();
      
      console.log('Category added successfully!');
      
    } catch (error) {
      console.error('Error adding category:', error);
      throw error;
    }
  };

  const handleAddProduct = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsProductModalOpen(true);
  };

  const handleProductSuccess = () => {
    setIsProductModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Admin Product Management</h1>
            <p className="text-gray-500 text-sm md:text-base">View, manage, and add products for each category. Use the buttons to add new categories or products.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsCategoryModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
            >
              <MdCategory className="w-4 h-4" />
              Add Category
            </button>
            <button 
              onClick={() => setIsProductModalOpen(true)}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
            >
              <MdAdd className="w-4 h-4" />
              Add Product
            </button>
          </div>
        </div>
        
        <div className="space-y-12">
          {Categories?.map((category) => (
            <div key={category._id}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-blue-700 border-b border-blue-100 pb-1">{category.name}</h2>
                <button
                  onClick={() => handleAddProduct(category.name)}
                  className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors flex items-center gap-1"
                >
                  <MdAdd className="w-3 h-3" />
                  Add Product
                </button>
              </div>
              <CategoryProducts categoryData={category} />
            </div>
          ))}
        </div>
      </div>

      {/* Category Modal */}
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        title="Add New Category"
        size="md"
      >
        <AddCategoryForm
          onClose={() => setIsCategoryModalOpen(false)}
          onSubmit={handleAddCategory}
        />
      </Modal>

      {/* Product Modal */}
      <Modal
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedCategory(null);
        }}
        title="Add New Product"
        size="lg"
      >
        <AddProductForm
          categoryName={selectedCategory || "Select Category"}
          onClose={() => {
            setIsProductModalOpen(false);
            setSelectedCategory(null);
          }}
          onSuccess={handleProductSuccess}
        />
      </Modal>
    </div>
  );
};

export default AdminProduct;
