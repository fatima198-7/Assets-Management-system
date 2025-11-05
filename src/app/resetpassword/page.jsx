import Link from "next/link";

function Page() {
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

        {/* Scrollable content inside separate div */}
        <div className="overflow-y-auto scroll-smooth p-8">
          <div className="flex justify-center">
            <img src="/272.png" alt="reset-img" className="w-[40%]" />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <h2 className="font-bold text-xl">Create new password</h2>
            <p className="text-[14px] text-gray-500">
              Create a Strong and Secure Password
            </p>

            {/* New Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="new-password"
                className="text-gray-700 text-sm font-bold mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter password"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="confirm-password"
                className="text-gray-700 text-sm font-bold mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="***********"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 p-2 rounded-md w-full outline-none transition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
