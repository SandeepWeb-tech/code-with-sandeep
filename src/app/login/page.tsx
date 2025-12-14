'use client'
import { redirect, useRouter } from "next/navigation";
// src/pages/Login.jsx
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter()

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // TODO: Replace with your login logic (API call, validation, etc.)
    const dataset = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
        body: JSON.stringify(dataset),
      });
      console.log(response);
      const { success, msg } = await response.json();
      if (success) {
        alert("Data fetched successfully");
        router.push("/")
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        {/* Extra Links */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
