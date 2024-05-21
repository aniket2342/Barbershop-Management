import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getUserDetails = async (phoneNumber) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${phoneNumber}`,
      );
      const data = await response.json();
      if (response.ok) {
        const { name, address } = data.user;
        // const user = {name, address, phoneNumber };
        var userdata = {
          name: name,
          number: phoneNumber,
          address: address,
        };
        localStorage.setItem("userdata", JSON.stringify(userdata));
        console.log("logig", userdata);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: number, password }),
      });
      const data = await response.json();
      setLoginMessage(data.message);
      if (response.ok && data.message === "Login successful") {
        await getUserDetails(number);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginMessage("An error occurred while logging in");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-black">
      <div className="flex flex-col  p-6 bg-white shadow-md rounded-lg">
        <p className="text-center mt-2">Login</p>
        <div>
          <label className="block mb-1">Number:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="bg-primary p-2 w-full border border-gray-300 rounded-md"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="bg-black text-white p-2 mx-auto w-full border border-gray-300 rounded-md"
        >
          Login
        </button>
        {loginMessage && <p className="text-red-600">{loginMessage}</p>}
      </div>
      <p className="mt-2 text-white">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
