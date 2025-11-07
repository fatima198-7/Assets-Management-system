"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Clock, Tag, Folder, Star, Trash2, Settings } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true); // Settings dropdown by default open

  const links = [
    { name: "Recent", href: "/dashboard/recents", icon: <Clock size={18} /> },
    { name: "Tags", href: "/dashboard/tags", icon: <Tag size={18} /> },
    { name: "Folders", href: "/dashboard/folders", icon: <Folder size={18} /> },
    {
      name: "Favorites",
      href: "/dashboard/favorites",
      icon: <Star size={18} />,
    },
    { name: "Trash", href: "/dashboard/trash", icon: <Trash2 size={18} /> },
  ];

  return (
    <aside className="w-44 flex flex-col gap-4 bg-white rounded-2xl p-4 shadow">
      {/* Logo */}
      <div className="flex gap-2 justify-center border-b border-gray-200 px-4 py-4">
        <img src="/group.png" alt="Logo" className="w-9 h-9" />
        <img src="/group-1.png" alt="Brand" className="w-21 h-9" />
      </div>

      {/* Add New */}
      <div className="flex justify-center border-b border-gray-300 pb-4">
        <Link
          href="/addNew"
          className="w-[70%] p-2 border border-gray-400 rounded-md text-left hover:bg-gray-100 transition"
        >
          + Add New
        </Link>
      </div>

      {/* Overview */}
      <div className="px-4">
        <p className="text-gray-700 pb-2">Overview</p>
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 p-2 rounded-md w-full transition ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* File Manager Links */}
      <div className="border-t border-gray-300 pt-4 flex-1">
        <h4 className="text-gray-700 pl-4 pb-2">File Manager</h4>
        <div className="px-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 p-2 rounded-md transition ${
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="border-t pt-4">
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-blue-600 transition w-full text-left ${
            pathname.startsWith("/dashboard/settings") ? "text-blue-600" : ""
          }`}
        >
          <Settings size={18} />
          Settings
        </button>

        {isSettingsOpen && (
          <div className="flex flex-col px-4 pt-2 gap-1">
            <Link
              href="/dashboard/settings/profile"
              className={`group p-2 rounded-md flex items-center gap-2 transition ${
                pathname === "/dashboard/settings/profile"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Profile
            </Link>

            <Link
              href="/dashboard/settings/documents"
              className={`group p-2 rounded-md flex items-center gap-2 transition ${
                pathname === "/dashboard/settings/documents"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Documents
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
