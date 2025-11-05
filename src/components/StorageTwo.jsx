"use client";
import React from "react";
import { MoreVertical } from "lucide-react";

function StorageTwo({ title, img, name }) {
  return (
    <div className="box rounded-lg shadow flex flex-col gap-3 bg-white">
      {/* Image Section */}
      <div className="img flex justify-center items-center w-full border-b border-b-gray-200">
        <img src={img} alt={title} className="w-[85%] pt-3" />
      </div>

      {/* Name + Menu Icon */}
      <div className="flex items-center justify-between px-4 pb-4">
        <p className="text-sm text-gray-700">{name}</p>

        <button className="hover:bg-gray-100 p-1 rounded-md transition">
          <MoreVertical size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default StorageTwo;
