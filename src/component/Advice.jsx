import React, { useState, useEffect } from "react";
import axios from "axios";

function Advice() {
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const hairCareTips = [
    "Wash Your Hair Regular",
    "Use Chemical free Shampoos",
    "Condition Correctly",
    "Dry Your Hair Naturally",
    "Oil Your Hair Properly",
    "Use A Wide-toothed Comb",
  ];

  useEffect(() => {
    // Check if user data is present in local storage
    const storedUserData = localStorage.getItem("userdata");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle buy button click
  const handleBuyClick = (productId) => {
    if (!userData) {
      alert("Please login to proceed");
      return;
    }

    const userNumber = userData.number;
    // Make a POST request to the /orders endpoint
    axios
      .post("http://localhost:5000/orders", { productId, userNumber })
      .then((response) => {
        console.log("Order created successfully:", response.data);  
        alert("Order created successfully");
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        alert("Error creating order. Please try again later.");
      });
  };

  return (
    <>
      {/* Advice Section */}
      <section className="body-font">
        <div className="container px-5 py-32 mx-auto top-96">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-primary mb-4">
              Hair Care Tips
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {hairCareTips.map((tip, index) => (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">{tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Product Sale</h2>

        {/* Grid for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-scale-down"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">${product.price}</span>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => handleBuyClick(product.id)}
                    
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Advice;
