import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
  <div className="flex flex-col space-y-4">
    <Link to="/addproducts" className="bg-primary hover:bg-white text-black py-2 px-4 rounded-md text-center">
      Add Products
    </Link>
    <Link to="/orders" className="bg-primary hover:bg-white text-black py-2 px-4 rounded-md text-center">
      See Orders
    </Link>
  </div>
</div>

  );
};

export default AdminDashboard;
