import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddProductForm = ({ categoryName }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    item_name: "",
    item_price: "",
    description: "",
    itemImg1: null, // File object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      itemImg1: file,
    }));
  };

  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: async () => {
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
      
      alert("Product added successfully!");
      setFormData({
        item_name: "",
        item_price: "",
        description: "",
        itemImg1: null,
      });
    },
    onError: (err) => {
      alert(`Error: ${err.response?.data?.error || err.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">Add Product - {categoryName}</h1>

      {/* Product Name */}
      <div>
        <label className="block font-semibold">Product Name</label>
        <input
          type="text"
          name="item_name"
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={formData.item_name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Product Price */}
      <div>
        <label className="block font-semibold">Product Price</label>
        <input
          type="number"
          name="item_price"
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={formData.item_price}
          onChange={handleChange}
          required
        />
      </div>

      {/* Product Description */}
      <div>
        <label className="block font-semibold">Product Description</label>
        <textarea
          name="description"
          className="w-full border border-gray-300 rounded px-2 py-1 h-25"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Product Image */}
      <div>
        <label className="block font-semibold">Product Image</label>
        <input
          type="file"
          name="itemImg1"
          accept="image/*"
          className="w-full border border-gray-300 rounded px-2 py-1"
          onChange={handleFileChange}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isPending ? "Adding Product..." : "Submit"}
      </button>
    </form>
  );
};

export default AddProductForm;
