import React from "react";

const Form = ({ type }) => {
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
          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Email
              </label>
              <input
                className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="username"
                type="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="password"
                type="password"
                placeholder="Password"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
