"use client";
import Link from "next/link";

export default function OtpScreen() {
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
            <img src="/271-1.png" alt="otp-img" className="w-[50%]" />
          </div>

          <h2 className="font-bold text-xl pb-1 ">Enter OTP</h2>
          <p className="text-gray-600 text-[12px] ">
            Please enter the 6-digit OTP we've sent to warren.wade@example.com
          </p>
          <div className="flex justify-between pt-6 ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-10 h-10 md:w-12 md:h-12 text-center border border-gray-300 rounded-md text-lg font-semibold 
                focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none transition"
              />
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <a href="#" className="text-blue-500 underline text-[12px]">
              Did't Receive Code? 00:00
            </a>
          </div>

          {/* Next Button */}
          <div className="pt-6">
            <Link
              href="/resetpassword"
              className="border border-gray-300 block p-2 rounded-md w-full outline-none transition text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
