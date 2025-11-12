"use client";
import React from "react";
import CloseButton from "@/components/common/CloseButton";

export default function Rename({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/45  z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-[400px] overflow-hidden">
        {/* Close Button */}
        <div className="absolute right-4 top-4 z-20">
          <CloseButton onClick={onClose} />
        </div>

        <div className="p-6 max-h-[70vh] flex flex-col gap-3">
          <h2 className="font-bold text-sm">Rename</h2>

          <p className="border border-gray-300 rounded p-2">Google Doc.pdf</p>

          <div className="flex gap-2">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>

            {/* Ok Button */}
            <button
              onClick={onClose}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
