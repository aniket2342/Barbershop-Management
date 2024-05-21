import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, password }),
      });
      const data = await response.json();
      setLoginMessage(data.message);
      if (data.message === "Admin logged in successfully") {


        localStorage.setItem("admin", true);

        navigate("/dashboard"); // Navigate to the dashboard route
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginMessage("An error occurred while logging in");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="p-6 bg-white border-2 flex flex-col shadow-md rounded-lg">
        <div>
          <label htmlFor="phoneNumber"  className="block mb-4 ">Phone Number:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md mb-2"
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-4 ">Password:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md mb-2"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleTogglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button onClick={handleLogin} className="bg-black text-white p-2 mx-auto w-full rounded-md">Login</button>
        {loginMessage && <p className="text-red-600">{loginMessage}</p>}
      </div>
    </div>
  );
};

export default Admin;
