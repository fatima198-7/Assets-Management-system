"use client";
import React, { useState } from "react";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div>
      <h1 className="font-bold pb-3">Profile</h1>
      <div className="border border-gray-300 rounded p-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/profile.png"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="pl-3">
            <p className="font-bold">Jenny Wilson</p>
            <p className="text-[12px] text-gray-400">
              jenny.wilson@example.com
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center bg-gray-100 p-1 rounded hover:bg-gray-200 transition"
        >
          <img src="/user.svg" alt="edit" className="w-4 h-4" />
          <p className="pl-2">Edit</p>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 bg-opacity-50">
          <div className="bg-white rounded-lg w-96  relative">
            <div>
              <img src="/back-prof.png" alt="cover-profile" />
              <div className="flex  item center relative left-5 bottom-8">
                <p className="border border-gray-200 rounded bg-blue-500 text-white p-5">
                  JW
                </p>
              </div>
            </div>
            <div className="px-6">
              <h2 className="text-lg font-bold mb-4">Jenny wilson</h2>
              <p className="text-[12px] text-gray-400">Admin</p>
              <div className="flex justify-between pt-3 pb-4 border-b border-gray-200">
                <div className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="#3D4D53"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      stroke="#3D4D53"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="pl-2">Email</p>
                </div>
                <p>jenny.wilson@mail.com</p>
              </div>
              <div
                className="flex gap-2 py-4 item-center"
                onClick={() => setIsEditOpen(true)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.88505 11.4723C2.94187 12.0251 0.46891 13.154 1.97511 14.5665C2.71087 15.2565 3.53033 15.75 4.56058 15.75H10.4394C11.4697 15.75 12.2891 15.2565 13.0249 14.5665C14.5311 13.154 12.0581 12.0251 11.115 11.4723C8.90321 10.1759 6.09679 10.1759 3.88505 11.4723Z"
                    stroke="#03111E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 5.25C10.5 6.90685 9.15685 8.25 7.5 8.25C5.84315 8.25 4.5 6.90685 4.5 5.25C4.5 3.59315 5.84315 2.25 7.5 2.25C9.15685 2.25 10.5 3.59315 10.5 5.25Z"
                    stroke="#03111E"
                  />
                  <path
                    d="M14.7166 3.42423C14.8843 3.24257 14.9681 3.15174 15.0572 3.09876C15.2721 2.97092 15.5368 2.96695 15.7553 3.08827C15.8459 3.13855 15.9323 3.22683 16.1051 3.40337C16.278 3.57992 16.3644 3.66819 16.4136 3.76071C16.5324 3.98395 16.5285 4.25433 16.4033 4.47391C16.3515 4.56491 16.2625 4.65055 16.0847 4.82183L13.9689 6.85972C13.6319 7.1843 13.4634 7.34659 13.2528 7.42884C13.0422 7.51109 12.8107 7.50504 12.3477 7.49293L12.2847 7.49128C12.1438 7.4876 12.0733 7.48575 12.0323 7.43926C11.9913 7.39277 11.9969 7.32097 12.0081 7.17739L12.0142 7.09942C12.0457 6.6953 12.0614 6.49324 12.1403 6.3116C12.2192 6.12996 12.3554 5.98248 12.6276 5.68751L14.7166 3.42423Z"
                    stroke="#03111E"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="pointer ">Edit Profile</p>
              </div>
              {/* change password */}
              <div className="flex gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8683 11.625H10.875M7.125 11.625H7.13172"
                    stroke="#03111E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.20086 14.1336C3.36952 15.3862 4.4071 16.3676 5.66974 16.4257C6.73221 16.4745 7.81148 16.5 9 16.5C10.1885 16.5 11.2678 16.4745 12.3303 16.4257C13.5929 16.3676 14.6305 15.3862 14.7991 14.1336C14.9092 13.316 15 12.4782 15 11.625C15 10.7718 14.9092 9.93399 14.7991 9.11644C14.6305 7.86377 13.5929 6.88237 12.3303 6.82432C11.2678 6.77548 10.1885 6.75 9 6.75C7.81148 6.75 6.73221 6.77548 5.66974 6.82432C4.4071 6.88237 3.36952 7.86377 3.20086 9.11644C3.09078 9.93399 3 10.7718 3 11.625C3 12.4782 3.09078 13.316 3.20086 14.1336Z"
                    stroke="#03111E"
                  />
                  <path
                    d="M5.625 6.75V4.875C5.625 3.01104 7.13604 1.5 9 1.5C10.864 1.5 12.375 3.01104 12.375 4.875V6.75"
                    stroke="#03111E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Change Password</p>
              </div>
              <div className="flex gap-3 py-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 2.25L7.75308 2.42538C5.819 3.108 4.85196 3.44931 4.30098 4.22806C3.75 5.00682 3.75 6.03232 3.75 8.08333V9.91668C3.75 11.9677 3.75 12.9932 4.30098 13.7719C4.85196 14.5507 5.819 14.892 7.75308 15.5746L8.25 15.75"
                    stroke="#FF6B50"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.75 9L8.25 9M15.75 9C15.75 8.47483 14.2543 7.49365 13.875 7.125M15.75 9C15.75 9.52517 14.2543 10.5064 13.875 10.875"
                    stroke="#FF6B50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FF6B50]">Logout</p>
              </div>
            </div>

            {/* Close Icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35">
          <div className="bg-white rounded-lg w-96 relative pb-6">
            {/* Cover + Profile */}
            <div>
              <img src="/back-prof.png" alt="cover-profile" />
              <div className="flex items-center gap-3 relative left-5 bottom-8">
                <p className="border border-gray-200 rounded bg-blue-500 text-white p-5">
                  JW
                </p>
                <p className="text-blue-500  relative top-4 text-[12px] text-sm cursor-pointer font-medium">
                  Change Image
                </p>
              </div>
            </div>

            <div className="px-6">
              {/* First & Last Name */}
              <div className="flex gap-3 mb-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstname"
                    className="text-[12px] font-bold text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Paul"
                    className="border border-gray-300 rounded px-3 py-2 w-full text-[12px]"
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="lastname"
                    className="text-[12px] font-bold text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Walker"
                    className="border border-gray-300 rounded px-3 py-2 w-full text-[12px]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="pt-3">
                <label
                  htmlFor="email"
                  className="text-[12px] font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="border border-gray-300 rounded px-3 py-2 w-full text-[12px]"
                />
              </div>

              {/* Change Button */}
              <div className="flex justify-end mb-6 relative bottom-7  right-3">
                <button className="text-blue-600 text-[12px] font-medium hover:underline">
                  Change
                </button>
              </div>

              {/* Save & Cancel */}
              <div className="flex  gap-3">
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="border border-gray-400 rounded  p-2 w-full"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white rounded w-full p-2">
                  Save
                </button>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
