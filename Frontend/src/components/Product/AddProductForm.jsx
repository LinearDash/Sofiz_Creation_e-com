import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { MdAdd, MdImage, MdClose } from "react-icons/md";

const AddProductForm = ({ categoryName, onClose, onSuccess }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    item_name: "",
    item_price: "",
    description: "",
    itemImg1: null,
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        itemImg1: file,
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, itemImg1: null }));
    setImagePreview(null);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.item_name.trim()) {
      newErrors.item_name = "Product name is required";
    } else if (formData.item_name.trim().length < 2) {
      newErrors.item_name = "Product name must be at least 2 characters";
    }
    
    if (!formData.item_price) {
      newErrors.item_price = "Price is required";
    } else if (parseFloat(formData.item_price) <= 0) {
      newErrors.item_price = "Price must be greater than 0";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }
    
    if (!formData.itemImg1) {
      newErrors.itemImg1 = "Product image is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: async () => {
      if (!validateForm()) {
        throw new Error("Please fix the form errors");
      }

      const data = new FormData();
      data.append("item_name", formData.item_name);
      data.append("item_price", formData.item_price);
      data.append("description", formData.description);
      data.append("categoryName", categoryName);
      data.append("itemImg1", formData.itemImg1);

      const res = await axios.post("/api/product/addProduct", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      // Invalidate and refetch categories to show the new product
      queryClient.invalidateQueries({ queryKey: ["Categories"] });
      
      // Reset form
      setFormData({
        item_name: "",
        item_price: "",
        description: "",
        itemImg1: null,
      });
      setImagePreview(null);
      setErrors({});
      
      // Call success callback
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    },
    onError: (err) => {
      console.error("Error adding product:", err);
      setErrors({ submit: err.response?.data?.error || err.message || "Failed to add product" });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
          <MdAdd className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label htmlFor="item_name" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.item_name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter product name"
            disabled={isPending}
          />
          {errors.item_name && (
            <p className="mt-1 text-sm text-red-600">{errors.item_name}</p>
          )}
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="item_price" className="block text-sm font-medium text-gray-700 mb-2">
            Price *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              id="item_price"
              name="item_price"
              value={formData.item_price}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={`w-full pl-8 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.item_price ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="0.00"
              disabled={isPending}
            />
          </div>
          {errors.item_price && (
            <p className="mt-1 text-sm text-red-600">{errors.item_price}</p>
          )}
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
              errors.description ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe your product..."
            disabled={isPending}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image *
          </label>
          
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg border border-gray-300"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <MdClose className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <input
                type="file"
                name="itemImg1"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
                disabled={isPending}
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <MdImage className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload image</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
              </label>
            </div>
          )}
          {errors.itemImg1 && (
            <p className="mt-1 text-sm text-red-600">{errors.itemImg1}</p>
          )}
        </div>

        {/* Category Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Category:</span> {categoryName}
          </p>
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={isPending}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Adding...
              </div>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
