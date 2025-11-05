"use client";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 p-4">
      <div
        className="relative bg-white rounded-2xl shadow-2xl 
        flex flex-col md:flex-row w-full max-w-4xl overflow-hidden transition-all max-h-[90vh]"
        style={{ scrollbarGutter: "stable" }}
      >
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
        >
          ×
        </Link>

        {/* Left Side - Form Section */}
        <div
          className="w-full md:w-1/2 p-8 overflow-y-auto scroll-smooth"
          style={{ scrollbarGutter: "stable", scrollbarWidth: "thin" }}
        >
          {/* Logo */}
          <div className="flex gap-2 pb-6">
            <img src="/group.png" alt="logo" className="w-8" />
            <img src="/group-1.png" alt="logo" className="w-16" />
          </div>

          {/* Text */}
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Welcome Back to Your Cloud Hub!
          </h3>
          <p className="text-gray-500 text-sm leading-5 mb-4">
            Sign in to access your cloud storage and collaborate seamlessly.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            Please enter your login details below!
          </p>

          {/* Google Sign-in */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 text-gray-700 hover:bg-gray-100 transition">
            <img src="/google.svg" alt="Google" className="h-5 w-5" />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gray-300 w-1/3"></div>
            <span className="text-gray-400 text-sm px-2">or</span>
            <div className="h-px bg-gray-300 w-1/3"></div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-bold mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm font-bold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 mt-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-5">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center  p-6">
          <img
            src="/191.png"
            alt="side illustration"
            className="max-h-[400px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
