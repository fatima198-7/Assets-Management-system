"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FileDetailsDrawer({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("details");
  const router = useRouter();

  const handleClose = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black/40 p-4 w-screen">
      <div
        className={`relative right-18 top-4 bg-white shadow-xl w-56 h-[99%] max-w-3xl overflow-y-auto 
transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>
        {/* Header */}
        <div className="flex p-5 justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <img
              src="/pdf.svg"
              alt="pdf"
              className="bg-orange-500 p-1 rounded h-8 w-8"
            />
            <div>
              <p className="relative top-1">Google Testing</p>
              <p className="relative bottom-1">doc.pdf</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 p-1">
          <button
            onClick={() => setActiveTab("details")}
            className={`w-full text-center py-2 ${
              activeTab === "details"
                ? "border-b border-blue-500 text-blue-600"
                : "hover:bg-[rgba(58,111,225,0.1)] hover:border-b hover:border-blue-400"
            }`}
          >
            Details
          </button>

          <button
            onClick={() => setActiveTab("activity")}
            className={`w-full text-center py-2 ${
              activeTab === "activity"
                ? "border-b border-blue-500 text-blue-600"
                : "hover:bg-[rgba(57,108,219,0.11)] hover:border-b hover:border-blue-400"
            }`}
          >
            Activity
          </button>
        </div>

        {/* TAB CONTENT SECTION */}
        <div className=" text-sm">
          {activeTab === "details" && (
            <div>
              <img src="/page.png" alt="page-img" className="w-full py-2" />
              <div className="py-2 px-4 border-b border-gray-300">
                <p className="text-[17px]">Who has Access</p>
                <img
                  src="/man-profile.png"
                  alt="profile"
                  className="py-2 w-[30px]"
                />
              </div>
              <div className="px-4">
                <h3 className="text-[17px] py-2">File Details</h3>
                <div className="pb-3">
                  <p className="font-semibold">Type</p>
                  <p className="">PDF</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Size</p>
                  <p className="">173 KB</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Storage used</p>
                  <p>173 KB</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Location</p>
                  <p className="font-medium">My Drive</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Owner</p>
                  <p className="font-medium">me</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Modified</p>
                  <p className="font-medium">12 Aug 2023 by me</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Created</p>
                  <p className="font-medium">26 Sept 2023</p>
                </div>
                <div className="pb-3">
                  <p className="font-semibold">Download permissions</p>
                  <p className="text-[13px] text-gray-400">
                    Viewers can download
                  </p>
                </div>
              </div>
              <div className=" ">
                <p className="font-semibold px-2 py-1">Description</p>
                <p className="text-[13px] text-gray-400 bg-[#4e90d62f] px-3 py-2">
                  Add Description
                </p>
              </div>
              <div className=" ">
                <p className="font-semibold px-2 py-1">Tags</p>
                <p className="text-[13px] text-gray-400 bg-[#4e90d62f] px-3 py-2">
                  Add Tags
                </p>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="p-3">
              <h3 className="font-semibold">Last year</h3>
              <div className="flex py-3">
                <img
                  src="/man-profile.png"
                  alt="profile"
                  className="w-[30px] h-[30px]"
                />
                <div className="pl-3">
                  <p>You uploaded an item</p>
                  <p className="text-[12px]">26 SEP 2023, 14:23:35</p>
                </div>
              </div>
              <div className="justify-center flex">
                <div className="flex border border-gray-200 rounded px-3 py-2">
                  <img src="/dropdown.svg" alt="img" />
                  <p className="pl-4">My Drive</p>
                </div>
              </div>
              <div className="flex gap-2 relative left-14 top-3">
                <img
                  src="/left-bottom-border.svg"
                  alt="img"
                  className="w-[8%]"
                />
                <div className="flex border border-gray-200 rounded px-2 py-1">
                  <img
                    src="/pdf.svg"
                    alt="pdf"
                    className="bg-orange-500 p-1  rounded h-5 w-5"
                  />
                  <p className="pl-2">My Drive</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
