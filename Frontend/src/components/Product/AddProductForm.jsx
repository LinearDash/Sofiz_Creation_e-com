import React, { useState } from "react";

const AddProductForm = ({ categoryName }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submmit from clicked`);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">Add Product - {categoryName} </h1>

      <div>
        <label className="block font-semibold">Product Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Product Price</label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Product Description</label>
        <textarea
          className="w-full border border-gray-300 rounded px-2 py-1 h-25"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label className="block font-semibold">Product Images</label>
        <input
          type="file"
          className="w-full border border-gray-300 rounded px-2 py-1"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
              setImg1(file);
            } else {
              alert("Please upload a valid image file.");
              e.target.value = null; // Reset the input
            }
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
