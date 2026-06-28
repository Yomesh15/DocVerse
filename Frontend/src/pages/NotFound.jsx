import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
 
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>
 
        <div className="text-6xl my-4">😕</div>
 
        <h2 className="text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>
 
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sorry, the page you're looking for doesn't exist,
          has been moved, or the URL is incorrect.
        </p>
 
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
 
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/doctors"
            className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaSearch />
            Find Doctors
          </Link>

        </div>
 
        <p className="mt-10 text-gray-400 text-sm">
          Error Code: <span className="font-semibold">404</span> • Wrong Path
        </p>

      </div>
    </div>
  );
};

export default NotFound;