"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    router.push("/");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full  z-50 overflow-auto">
      <div className="overflow-y-auto w-full h-full bg-white z-50 flex flex-col md:flex-row items-center justify-center">
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center p-8 overflow-y-auto">
          {/* Logo */}
          <div className="flex gap-2 pb-6">
            <img src="/group.png" alt="logo" className="w-8" />
            <img src="/group-1.png" alt="logo" className="w-16" />
          </div>

          {/* Headings */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Join the Cloud Revolution
            </h3>
            <p className="text-gray-700 mt-1 text-sm leading-6 pb-4">
              Create your account to manage and secure your digital assets.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              Please enter your details below.
            </p>
          </div>

          {/* Google Sign-up */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 text-gray-700 hover:bg-gray-100 transition">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.501 12.2332C22.501 11.3699 22.4296 10.7399 22.2748 10.0865H12.2153V13.9832H18.12C18.001 14.9515 17.3582 16.4099 15.9296 17.3898L15.9096 17.5203L19.0902 19.935L19.3106 19.9565C21.3343 18.1249 22.501 15.4298 22.501 12.2332Z"
                fill="#4285F4"
              />
              <path
                d="M12.2147 22.5C15.1075 22.5 17.536 21.5666 19.3099 19.9566L15.9289 17.3899C15.0242 18.0082 13.8099 18.4399 12.2147 18.4399C9.38136 18.4399 6.97663 16.6083 6.11941 14.0766L5.99376 14.087L2.6865 16.5954L2.64325 16.7132C4.40513 20.1432 8.02417 22.5 12.2147 22.5Z"
                fill="#34A853"
              />
              <path
                d="M6.12003 14.0766C5.89385 13.4233 5.76295 12.7233 5.76295 12C5.76295 11.2766 5.89385 10.5766 6.10813 9.92329L6.10214 9.78415L2.75343 7.23552L2.64387 7.28659C1.91771 8.70994 1.50104 10.3083 1.50104 12C1.50104 13.6916 1.91771 15.2899 2.64387 16.7133L6.12003 14.0766Z"
                fill="#FBBC05"
              />
              <path
                d="M12.2147 5.55997C14.2266 5.55997 15.5837 6.41163 16.3576 7.12335L19.3814 4.23C17.5243 2.53834 15.1075 1.5 12.2147 1.5C8.0242 1.5 4.40514 3.85665 2.64325 7.28662L6.10753 9.92332C6.97665 7.39166 9.3814 5.55997 12.2147 5.55997Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center py-4">
            <div className="h-px bg-gray-300 w-1/2"></div>
            <span className="text-gray-400 text-sm px-2">or</span>
            <div className="h-px bg-gray-300 w-1/2"></div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              <div className="flex flex-col w-full ">
                <label className="text-sm mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Tasmia"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Fatima"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div className="flex justify-between items-center text-sm mt-2">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 mt-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-5">
            Already have an account?{" "}
            <Link href="/signIn" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center  p-6 h-screen">
          <img src="/191.png" className="max-h-[400px] w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
