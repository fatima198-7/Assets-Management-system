"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Tag, Folder, Star, Trash2, Settings } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();

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
    <aside className="w-full auto flex flex-col  gap-4 bg-white rounded-2xl ">
      {/* Logo */}
      <div className="flex gap-2 justify-center  border-b border-gray-200  px-8 py-4">
        <img src="/group.png" alt="Logo" className="w-9 h-9" />
        <img src="/group-1.png" alt="Brand" className="w-21 h-9" />
      </div>

      {/* Add New Button */}
      <div className="flex justify-center border-b border-gray-300 pb-4">
        <button className="mx-auto border border-gray-400 p-2 rounded-md w-[70%] text-left hover:bg-gray-100 transition pl-4">
          <Link href="/addNew">+ Add New</Link>
        </button>
      </div>
      <div className="px-4">
        <p className="text-gray-700   pb-2">Overview</p>
        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-2 rounded-md w-full hover:bg-blue-600 hover:text-white transition"
        >
          Dashboard
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="border-t border-gray-300 pt-4 flex-1">
        <h4 className="text-gray-700  pl-4 pb-2">File Manager</h4>
        <div className="px-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 p-2 rounded-md w-full hover:bg-blue-600 hover:text-white transition ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Settings */}
      <div className="border-t pt-4">
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 text-gray-700 hover:text-blue-600 transition ${
            pathname === "/dashboard/settings" ? "text-blue-600" : ""
          }`}
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
