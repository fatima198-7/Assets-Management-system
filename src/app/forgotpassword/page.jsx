"use client";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 p-4">
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md 
        flex flex-col overflow-hidden box-border transition-all max-h-[90vh]"
      >
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ×
        </Link>
        <div className="overflow-y-auto scroll-smooth p-8">
          <div className="flex justify-center items-center">
            <img src="/271.png" alt="img" className="w-[50%]" />
          </div>
          <h2 className="font-bold text-2xl">Forgot Password</h2>
          <p className="text-gray-600 text-[]12px">
            Please provide the emale address Linked to your account.
          </p>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm font-bold pt-4 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
            />
          </div>
          <br />
          <Link
            href="/resetpassword"
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2  rounded-md w-full outline-none transition text-center bg-blue-500 hover:bg-blue-600 text-white"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
