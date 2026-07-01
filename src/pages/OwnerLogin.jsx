import React, { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";

function OwnerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
  setLoading(true);
  setError("");

  try {
    const response = await api.post("/login/", {
      username,
      password,
    });

    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    navigate("/dashboard");
  } catch (err) {
    setError("Invalid username or password");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F8F7FF] to-[#EEE9FF] px-6">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#6C63FF]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#8B83FF]/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C63FF]/5 blur-[120px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(108,99,255,0.35)]">

        {/* Logo */}
        <Link
          to="/"
          className="flex justify-center mb-6"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B83FF] text-2xl font-bold text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-3">
            T
          </div>
        </Link>

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Welcome Back
        </h1>

        <p className="mt-2 mb-8 text-center text-gray-500">
          Sign in to manage your testimonials.
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
/>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-12 outline-none transition-all duration-300 focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/20"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#6C63FF]"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="accent-[#6C63FF]"
            />
            Remember me
          </label>

          <Link
            to="#"
            className="font-medium text-[#6C63FF] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        {error && (
  <p className="mb-4 text-center text-red-500">
    {error}
  </p>
)}

        {/* Sign In */}
        <button
  onClick={handleLogin}
  disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#8B83FF] py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {loading ? "Signing In..." : "Sign In"}
        <FiArrowRight />
        </button>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-200"></div>

          <span className="px-3 text-sm text-gray-400">
            or
          </span>

          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 font-medium transition-all duration-300 hover:border-[#6C63FF]/40 hover:bg-gray-50 hover:shadow-md">

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />

          Continue with Google

        </button>

        {/* Signup */}
        <p className="mt-8 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#6C63FF] hover:underline"
          >
            Create one
          </Link>
        </p>

        {/* Home */}
        <p className="mt-3 text-center text-gray-500">
          <Link
            to="/"
            className="font-medium text-[#6C63FF] hover:underline"
          >
            ← Back to Home
          </Link>
        </p>

      </div>
    </div>
  );
}

export default OwnerLogin;