import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders"); // Assuming the API endpoint is '/orders'
        // Convert ISO 8601 date strings to readable format
        const formattedOrders = response.data.orders.map((order) => ({
          ...order,
          date: new Date(order.date).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        }));
        setOrders(formattedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="pt-[8em] bg-white">
    <h1 className="text-2xl font-bold mb-4">Orders</h1>
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Order ID</th>
          <th className="border border-gray-300 px-4 py-2">Product ID</th>
          <th className="border border-gray-300 px-4 py-2">User Number</th>
          <th className="border border-gray-300 px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border border-gray-300">
            <td className="border border-gray-300 px-4 py-2">{order.id}</td>
            <td className="border border-gray-300 px-4 py-2">{order.productId}</td>
            <td className="border border-gray-300 px-4 py-2">{order.userNumber}</td>
            <td className="border border-gray-300 px-4 py-2">{order.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default Orders;
