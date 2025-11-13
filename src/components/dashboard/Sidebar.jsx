"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Clock, Tag, Folder, Star, Trash2, Settings } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  return (
    <aside className="w-56 flex flex-col gap-2 bg-white rounded-2xl py-4 pb-2 shadow">
      {/* Logo */}
      <div className="flex gap-2 justify-center border-b border-gray-200 px-4 py-4">
        <img src="/group.png" alt="Logo" className="w-9 h-9" />
        <img src="/group-1.png" alt="Brand" className="w-21 h-9" />
      </div>

      {/* Add New */}
      <div className="flex justify-center border-b border-gray-300 pr-4 pb-2 ">
        <Link
          href="/addNew"
          className="w-[86%] pl-3 py-1 border border-gray-400 rounded-md text-left hover:bg-gray-100 transition"
        >
          + Add New
        </Link>
      </div>

      {/* Overview */}
      <div className="px-4">
        <p className="text-gray-700 pb-2">Overview</p>
        <Link
          href="/dashboard"
          className={`group flex items-center gap-2 p-2 rounded-md w-[95%] transition ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-blue-600 hover:text-white"
          }`}
        >
          <img
            src="/dashboard.svg"
            alt="dashboard-img"
            className={`transition ${
              pathname === "/dashboard"
                ? "brightness-0 invert"
                : "group-hover:brightness-0 group-hover:invert"
            }`}
          />
          Dashboard
        </Link>
      </div>

      {/* File Manager Links */}
      <div className="border-t border-gray-300 pt-4 flex-1">
        <h4 className="text-gray-700 pl-4 pb-2">File Manager</h4>
        <div className="px-4 flex flex-col gap-2">
          {/* Recent */}
          <div className="relative overflow-hidden group">
            <Link
              href="/dashboard/recents"
              className={`flex items-center w-[95%] gap-2 p-2 rounded-md transition ${
                pathname === "/dashboard/recents"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <img
                src="/clock-1.svg"
                alt="clock"
                className={`transition ${
                  pathname === "/dashboard/recents"
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
              Recent
            </Link>

            <button
              className={`absolute top-3 right-4 text-[12px] px-2  rounded border border-blue-600 transition 
      ${
        pathname === "/dashboard/recents"
          ? "bg-white text-blue-600"
          : "bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600"
      }`}
            >
              10
            </button>
          </div>

          {/* Tags */}
          <Link
            href="/dashboard/tags"
            className={`group flex items-center w-[95%] gap-2 p-2 rounded-md transition ${
              pathname === "/dashboard/tags"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <img
              src="/tag-1.svg"
              alt="tag"
              className={`transition ${
                pathname === "/dashboard/tags"
                  ? "brightness-0 invert"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
            />
            Tags
          </Link>

          {/* Folders */}
          <div className="relative overflow-hidden group">
            <Link
              href="/dashboard/folders"
              className={`flex items-center w-[95%] gap-2 p-2 rounded-md transition ${
                pathname === "/dashboard/folders"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <img
                src="/folder-1.svg"
                alt="folder"
                className={`transition ${
                  pathname === "/dashboard/folders"
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
              Folders
            </Link>

            {/*updated badge */}
            <button
              className={`absolute top-3 right-4 text-[12px] px-2 rounded border border-blue-600 transition 
      ${
        pathname === "/dashboard/folders"
          ? "bg-white text-blue-600"
          : "bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600"
      }`}
            >
              New
            </button>
          </div>

          {/* Favorites */}
          <Link
            href="/dashboard/favorites"
            className={`group flex items-center w-[95%] gap-2 p-2 rounded-md transition ${
              pathname === "/dashboard/favorites"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <img
              src="/favourite -1.svg"
              alt="favorite"
              className={`transition ${
                pathname === "/dashboard/favorites"
                  ? "brightness-0 invert"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
            />
            Favorites
          </Link>

          {/* Trash */}
          <div className="relative overflow-hidden group">
            <Link
              href="/dashboard/trash"
              className={`flex items-center w-[95%] gap-2 p-2 rounded-md transition ${
                pathname === "/dashboard/trash"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <img
                src="/delete.svg"
                alt="delete"
                className={`transition ${
                  pathname === "/dashboard/trash"
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
              Trash
            </Link>

            <button
              className={`absolute top-3 right-4 text-[12px] px-2  rounded border border-blue-600 transition 
      ${
        pathname === "/dashboard/trash"
          ? "bg-white text-blue-600"
          : "bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600"
      }`}
            >
              10
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <h2 className="pl-4">Settings</h2>

        {/* Settings Button */}
        <div className=" group w-[90%] pt-2 pl-3 flex items-center justify-center">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="relative flex items-center gap-2 px-2 py-2 rounded-md w-[95%] mx-auto transition
        text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            <Settings size={18} />
            <span className="flex-1 text-left">Settings</span>

            {/* Arrow Icon (rotates when open) */}
            <span
              className="text-sm transition-transform  
                  text-black pr-2 group-hover:text-white"
            >
              🇻
            </span>
          </button>
        </div>

        {/* Dropdown Links */}
        {(isSettingsOpen || pathname.startsWith("/dashboard/settings")) && (
          <div className="flex flex-col px-4 pt-2 gap-1">
            {/* Profile */}
            <Link
              href="/dashboard/settings/profile"
              className={`group p-2 rounded-md w-[95%] flex items-center gap-2 transition ${
                pathname === "/dashboard/settings/profile"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <img
                src="/profile-1.svg"
                alt="profile"
                className={`transition ${
                  pathname === "/dashboard/settings/profile"
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
              Profile
            </Link>

            {/* Documents */}
            <Link
              href="/dashboard/settings/documents"
              className={`group p-2 w-[95%] rounded-md flex items-center gap-2 transition ${
                pathname === "/dashboard/settings/documents"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <img
                src="/link.svg"
                alt="link"
                className={`transition ${
                  pathname === "/dashboard/settings/documents"
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
              Document Links
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
