import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission triggered");
    onSubmit({ data });
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/random/1920x1080"
            alt=""
            className="w-full h-full object-cover filter blur-lg brightness-50"
          />
        </div>
        <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-xl font-bold mb-4">{type}</h1>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="Username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="username"
                type="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between gap-8">
              <button
                className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                {type}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            {type === "Register" ? (
              <Link to="/login" style={{ color: "blue" }}>
                {" "}
                Go to login
              </Link>
            ) : (
              <Link to="/register" style={{ color: "blue" }}>
                Go to register
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
