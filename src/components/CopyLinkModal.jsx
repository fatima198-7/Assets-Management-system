"use client";
import React from "react";

export default function CopyLinkModal({ file, onClose }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(file.link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-200">
        {/* Working Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Full Link</h2>

          <p className="text-sky-600 underline break-all select-all border border-gray-300 rounded p-2">
            <img src="/edit-user-02.svg" alt="img" />
            {file.link}
            mudassir_ocyber_work/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmudassir%5Focyber%5Fwork%2Fdocuments%2FMicrosoft%20Teams%20Chat%20Files%2FO%2Epdf&parentview=?/
          </p>

          <div className="flex gap-3">
            <button
              className="flex items-center justify-center p-2 w-[50%]  bg-[rgba(139,189,240,0.22)] text-black rounded border border-blue-500 hover:bg-blue-200 text-center  transition"
              onClick={handleCopy}
            >
              <img src="/link-05.svg" alt="copy-icon" className="pr-2" />
              Copy Link
            </button>

            <button
              className="flex items-center justify-center p-2 w-[50%]  bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
