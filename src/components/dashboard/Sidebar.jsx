"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Clock, Tag, Folder, Star, Trash2, Settings } from "lucide-react";
import FolderUpdateModal from "../FolderUpdateModal";

function Sidebar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [openFilesModal, setOpenFilesModal] = useState(false);
  const [openFilesUpdateModal, setOpenFilesUpdateModal] = useState(false);
  const [openFolderUpdateModal, setOpenFolderUpdateModal] = useState(false);

  return (
    <>
      <aside className="w-56 flex flex-col gap-2 bg-white rounded-2xl py-4 pb-2 shadow">
        {/* Logo */}
        <div className="flex gap-2 justify-center border-b border-gray-200 px-4 py-4">
          <img src="/group.png" alt="Logo" className="w-9 h-9" />
          <img src="/group-1.png" alt="Brand" className="w-21 h-9" />
        </div>

        {/* Add New */}
        <div className="flex justify-center border-b border-gray-300 pr-4 pb-4 pt-2 relative">
          <button
            onClick={() => setIsAddNewOpen(!isAddNewOpen)}
            className="w-[86%] pl-3 py-2  border border-gray-400 rounded-md text-left hover:bg-gray-100 transition"
          >
            + Add New
          </button>

          {/* Dropdown */}
          {isAddNewOpen && (
            <div className="absolute  top-10 left-4 w-[79%] border-0 bg-white shadow-md rounded-md z-50">
              <button
                onClick={() => {
                  setOpenFilesUpdateModal(true);
                  setIsAddNewOpen(false);
                }}
                className="flex  items-center gap-2 w-full border-b border-gray-200 text-left px-3 py-2 hover:bg-gray-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 9V14.3333M14.6666 11.6667L9.33325 11.6667"
                    stroke="#03111E"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.66659 4.33268H11.1666C12.571 4.33268 13.2733 4.33268 13.7777 4.66974C13.9961 4.81566 14.1836 5.00316 14.3295 5.22154C14.6391 5.68481 14.6641 6.45546 14.6662 7.66602M7.99992 4.33268L7.57763 3.4881C7.22778 2.7884 6.90807 2.08409 6.13276 1.79335C5.79318 1.66602 5.40527 1.66602 4.62943 1.66602C3.41845 1.66602 2.81296 1.66602 2.35863 1.91956C2.03476 2.1003 1.76753 2.36753 1.5868 2.69139C1.33325 3.14572 1.33325 3.75122 1.33325 4.9622V6.99935C1.33325 10.142 1.33325 11.7134 2.30956 12.6897C3.21425 13.5944 4.62987 13.6608 7.33325 13.6656"
                    stroke="#03111E"
                    stroke-linecap="round"
                  />
                </svg>
                Folder
              </button>
              <div className=" border-gray-50  ">
                <Link
                  href="/addNew"
                  className="flex  items-center gap-2 w-full text-left px-3 py-2  hover:bg-gray-100"
                >
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0.5H6.68182C8.85596 0.5 9.94302 0.5 10.698 1.03189C10.9143 1.18429 11.1063 1.36502 11.2682 1.56859C11.8333 2.27911 11.8333 3.30224 11.8333 5.34849V7.04545C11.8333 9.0209 11.8333 10.0086 11.5207 10.7975C11.0181 12.0657 9.95524 13.0661 8.60776 13.5391C7.76958 13.8333 6.72013 13.8333 4.62121 13.8333C3.42183 13.8333 2.82214 13.8333 2.34318 13.6652C1.57319 13.3949 0.965834 12.8233 0.678642 12.0986C0.5 11.6478 0.5 11.0834 0.5 9.95455V7.16667"
                      stroke="#03111E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8334 7.16602C11.8334 8.39332 10.8385 9.38824 9.61119 9.38824C9.16734 9.38824 8.64406 9.31046 8.2125 9.4261C7.82907 9.52884 7.52957 9.82834 7.42683 10.2118C7.3112 10.6433 7.38897 11.1666 7.38897 11.6105C7.38897 12.8378 6.39405 13.8327 5.16675 13.8327"
                      stroke="#03111E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.16675 2.16667C1.49443 1.82953 2.3666 0.5 2.83341 0.5M4.50008 2.16667C4.1724 1.82953 3.30023 0.5 2.83341 0.5M2.83341 0.5L2.83341 5.83333"
                      stroke="#03111E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Files Upload
                </Link>
              </div>
              <button
                onClick={() => {
                  setOpenFolderUpdateModal(true);
                  setIsAddNewOpen(false);
                }}
                className="flex  items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66659 4.33268H11.1666C12.571 4.33268 13.2733 4.33268 13.7777 4.66974C13.9961 4.81566 14.1836 5.00316 14.3295 5.22154C14.6385 5.68397 14.6642 6.17256 14.6664 7.33268M7.99992 4.33268L7.57763 3.4881C7.22778 2.7884 6.90807 2.08409 6.13276 1.79335C5.79318 1.66602 5.40527 1.66602 4.62943 1.66602C3.41845 1.66602 2.81296 1.66602 2.35863 1.91956C2.03476 2.1003 1.76753 2.36753 1.5868 2.69139C1.33325 3.14572 1.33325 3.75122 1.33325 4.9622V6.99935C1.33325 10.142 1.33325 11.7134 2.30956 12.6897C3.21425 13.5944 4.62987 13.6608 7.33325 13.6656H8.66659"
                    stroke="#03111E"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.3332 8.9987L12.3332 14.332M12.3332 8.9987C11.8664 8.9987 10.9942 10.3282 10.6665 10.6654M12.3332 8.9987C12.8 8.9987 13.6722 10.3282 13.9998 10.6654"
                    stroke="#03111E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Folder Upload
              </button>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="px-4 py-2">
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
              className="group relative flex items-center gap-2 px-2 py-2 rounded-md w-[95%] mx-auto transition
        text-gray-700 hover:bg-blue-600 hover:text-white"
            >
              <Settings size={18} />
              <span className="flex-1 text-left">Settings</span>

              {/* Arrow Icon (rotates when open) */}
              <span
                className={`text-sm transition-transform duration-200 ${
                  isSettingsOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                <img
                  src="/arrow.svg"
                  alt="dropdowmn"
                  className="group-hover:invert"
                />
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

      {/* Folder Update Modal */}
      {openFolderUpdateModal && (
        <FolderUpdateModal onClose={() => setOpenFolderUpdateModal(false)} />
      )}
    </>
  );
}

export default Sidebar;
