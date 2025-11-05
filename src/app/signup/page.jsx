"use client";
import Link from "next/link";

export default function SignUp() {
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

        <div
          className="w-full md:w-1/2 p-8 overflow-y-auto scroll-smooth"
          style={{ scrollbarGutter: "stable", scrollbarWidth: "thin" }}
        >
          {/* Logo */}
          <div className="flex gap-2 pb-6">
            <img src="/group.png" alt="logo" className="w-8" />
            <img src="/group-1.png" alt="logo" className="w-16" />
          </div>

          {/* Headings */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Join the Cloud Revolution s
            </h3>
            <p className="text-gray-700 mt-1 text-sm leading-6 pb-4">
              Create your account to revolutionize how you manage and secure
              your digital assets.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              Please enter your details below.
            </p>
          </div>

          {/* Google Sign-up */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 text-gray-700 hover:bg-gray-100 transition">
            <img src="/google.svg" alt="Google" className="h-5 w-5" />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gray-300 w-1/3"></div>
            <span className="text-gray-400 text-sm px-2">or</span>
            <div className="h-px bg-gray-300 w-1/3"></div>
          </div>

          {/* Sign Up Form */}
          <form className="flex flex-col gap-3">
            <div className="lg:flex gap-3">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="firstName"
                  className="text-gray-700 text-sm font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Tasmia"
                  className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="lastName"
                  className="text-gray-700 text-sm font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Fatima"
                  className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>

            <div className="flex justify-between items-center text-sm mt-2">
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 mt-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-500 text-sm mt-5">
            Already have an account?{" "}
            <Link href="/signIn" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side (Image Section) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 rounded-r-2xl">
          <img
            src="/191.png"
            alt="side illustration"
            className="max-h-[400px] w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
