import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    show: true // Assuming default value for 'show' is true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/products/add", formData);
      console.log("Product added successfully:", response.data);
      // Optionally reset form data after successful submission
      setFormData({
        image: "",
        name: "",
        description: "",
        price: "",
        show: true
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
  <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md">
    <input
      type="text"
      name="image"
      placeholder="Image URL"
      value={formData.image}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <input
      type="text"
      name="name"
      placeholder="Product Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <textarea
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    ></textarea>
    <input
      type="text"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <label className="flex items-center mb-4">
      <input
        type="checkbox"
        name="show"
        checked={formData.show}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            show: e.target.checked
          }))
        }
        className="mr-2"
      />
      Show
    </label>
    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">
      Add Product
    </button>
  </form>
</div>

  );
};

export default AddProducts;
