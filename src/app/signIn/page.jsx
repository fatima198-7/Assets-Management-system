"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    router.push("/");
  };
  return (
    <div className="fixed inset-0 bg-white z-50 md:flex overflow-y-auto py-12 md:py-24 px-6 md:px-24">
      {/* Left Side - Form Section */}
      <div
        className="w-full md:w-1/2 p-8 "
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
              href="/forgotpassword"
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
  );
}
