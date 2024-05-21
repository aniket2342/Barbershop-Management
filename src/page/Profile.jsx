import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  // State variable to hold userdata
  const [userdata, setUserdata] = useState(null);
  // State variable to hold orders
  const [orders, setOrders] = useState([]);

  const deleteUserdataFromLocalStorage = () => {
    try {
      localStorage.removeItem("userdata");
      console.log("Userdata deleted from local storage");
      setUserdata(null); // Update state to reflect deletion
    } catch (error) {
      console.error("Error deleting userdata from local storage:", error);
    }
  };

  useEffect(() => {
    // Function to check if userdata exists in local storage
    const getUserdataFromLocalStorage = () => {
      try {
        const storedUserData = localStorage.getItem("userdata");
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserdata(parsedUserData);
          console.log("Userdata found:", parsedUserData);
          // Fetch orders for the logged-in user
          fetchOrders(parsedUserData.number);
        } else {
          console.log("Userdata not found in local storage");
        }
      } catch (error) {
        console.error("Error getting userdata from local storage:", error);
      }
    };

    // Call the function when the component mounts
    getUserdataFromLocalStorage();
  }, []);

  // Function to fetch orders for the logged-in user
  const fetchOrders = async (userNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/orders/${userNumber}`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
  {userdata ? (
    <div className=" text-white">
      <p className="text-center text-white text-xl font-semibold">Hello {userdata.name}</p>
      <p className="text-lg mt-5">Your Number {userdata.number}</p>
      <p className="text-lg mt-5">Your Address {userdata.address}</p>
      
      <div className="mt-8">
        <h2 className="text-2xl">Your Orders:</h2>
        {orders.length > 0 ? (
          <table className="mt-4 w-full border-collapse border border-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="border text-black bg-primary px-4 py-2">Order ID</th>
                <th className="border text-black bg-primary px-4 py-2">Product Name</th>
                <th className="border text-black bg-primary px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border border-gray-700">
                  <td className="border border-gray-700 px-4 py-2">{order.id}</td>
                  <td className="border border-gray-700 px-4 py-2">{order.productName}</td>
                  <td className="border border-gray-700 px-4 py-2">{new Date(order.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4">No orders yet</p>
        )}
        <button
        onClick={deleteUserdataFromLocalStorage}
        className="bg-primary px-4 py-2 mt-4 text-black rounded hover:bg-white"
      >
        Logout
      </button>
      </div>
    </div>
  ) : (
    <p className="text-xl">No userdata found</p>
  )}
</div>

  );
};

export default Profile;
