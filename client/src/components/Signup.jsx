import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-medium mb-4 text-center">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mt-4 text-gray-600">Or sign up with</p>
          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up with Google
            </button>
            <button
              className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up with Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


