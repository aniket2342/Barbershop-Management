import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    console.log("clicked");
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phoneNumber: number, password, address }),
      });
      const data = await response.json();
      setRegisterMessage(data.message);
      if (data.message === "User created") {
        navigate("/profile");
        var userdata = {
          name: name,
          number: number,
          address: address
        }
        localStorage.setItem('userdata', JSON.stringify(userdata));
      }
    } catch (error) {
      console.error("Error registering:", error);
      setRegisterMessage("An error occurred while registering");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-black mt-20">
      <div className="p-6 border-2 flex flex-col bg-white shadow-md rounded-lg ">
        <p className="text-center mt-2">Register</p>
        <div>
          <label htmlFor="name" className="block mb-4 ">Name:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md mb-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number" className="block mb-4">Phone Number:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md mb-2"
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-4">Address:</label>
          <input
            className="bg-primary p-2 mb-2 w-full border border-gray-300 rounded-md"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-4">Password:</label>
          <input
            className="bg-primary p-2 mb-2 w-full border border-gray-300 rounded-md"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          onClick={handleRegister}
          className="bg-black text-white p-2 mx-auto w-full rounded-md"
        >
          Register
        </button>
        {registerMessage && <p className="text-red-600">{registerMessage}</p>}
      </div>
      <p className="mt-2 text-white">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
