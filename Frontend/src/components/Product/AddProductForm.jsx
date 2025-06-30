import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

const AddProductForm = ({ categoryName }) => {
  const [formData, setFormData] = useState({
    item_name: "",
    item_price: "",
    description: "",
    categoryName: categoryName,
    itemImg1: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    // this will update the data in formData
    //e.target.name gives the name of the input filed
    //e.target.value gives the value in input field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate: addProduct } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/product/addProduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), //this will make sure the body accepts json.string and the data in formData
        });
        const data = await res.json();

        //if the res.ok returns 404 or any error status it will throw an error
        if (!res.ok) {
          throw new Error(data.error || "Something went Wromg!!");
        }
        return data;
      } catch (error) {
        console.error("An error occurred while adding the product:", error);
        throw new Error(error);
      }
    },
    //on sucesfully completing the mutationFn this function will will and set the formData to null.
    onSuccess: () => {
      alert("Product added successfully!");
      setFormData({
        item_name: "",
        item_price: "",
        description: "",
        itemImg1: "",
      });
    },
    onError: (err) => {
      alert(`Error:${err}`);
    },
  });

  //when the form is submitted it will run the mutate function
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  };

  useEffect(() => {
    // Trigger a re-render or perform any necessary actions when handleSubmit is called
    // You can add logic here if needed
  }, [formData]);
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">Add Product - {categoryName} </h1>
      {/* Product Name Input */}
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
      {/* Product Price Input */}
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
      {/* Product Description Input */}
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
      {/* Product Image Input */}
      <div>
        <label className="block font-semibold">Product Images</label>
        <input
          name="itemImg1"
          type="file"
          className="w-full border border-gray-300 rounded px-2 py-1"
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(file);
            setFormData({ ...formData, itemImg1: file });
          }}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
