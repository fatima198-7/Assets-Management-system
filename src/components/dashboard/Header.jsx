"use client";
import { Bell, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md flex justify-end items-center p-4 rounded-2xl">
      <div className="flex items-center gap-4">
        <input
          type="text"
          name="text"
          id="search"
          placeholder="Search..."
          className="border bg-gray-100 border-gray-300  hover:bg-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Bell Icon */}
        <button className="p-2 bg-gray-100  border border-gray-300  hover:bg-gray-200 rounded-xl">
          <Bell className="w-5 h-5  text-gray-800" />
        </button>
        <button className="p-2 bg-yellow-400  border text-white  hover:bg-yellow-500 rounded-[45%]">
          pw
        </button>

        {/* Dropdown Button */}
        <button className="flex items-center  py-1.5  rounded-lg hover:bg-gray-100">
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </header>
  );
}

export default Header;
