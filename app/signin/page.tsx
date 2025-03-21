"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1E1E1E]">
      <div className="bg-[#121212] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign In</h2>

        {/* Google Sign In */}
        <button className="flex items-center justify-center w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          <FaGoogle className="mr-2" /> Sign In With Google
        </button>

        <div className="my-4 text-center text-gray-400">OR</div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1E1E1E] text-white p-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#1E1E1E] text-white p-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E6C992] text-white py-2 rounded-md hover:bg-[#b08b2f] transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account? {" "}
          <Link href="/signup" className="text-gray-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-gray-400 text-center mt-2">
          Forgot Password? {" "}
          <Link href="/forgot-password" className="text-gray-400 hover:underline">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
