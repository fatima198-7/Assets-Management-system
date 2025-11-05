"use client";
import React, { useState } from "react";
import {
  MoreVertical,
  FileText,
  Star,
  Trash,
  Edit,
  Download,
  Share2,
  Move,
  Ban,
} from "lucide-react";

function RecentFiles() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const baseItem = {
    name: "Google Testing.doc",
    lastModified: "05 Nov 2026",
    link: "/EVonMBw8jGlw?e=rbggHMe",
    filesize: "11MB",
  };

  const listItems = Array(20).fill(baseItem);

  const copyLink = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="rounded-lg py-6 relative">
      <h1 className="text-2xl font-semibold pb-4 flex items-center gap-2">
        Recent Files
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-[950px] w-full border-collapse text-sm">
          <thead>
            <tr className="text-black border-b-2 border-gray-200">
              <th className="p-3 text-left font-semibold">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left font-semibold">Name ↑</th>
              <th className="p-3 text-left font-semibold">Last Modified</th>
              <th className="p-3 text-left font-semibold">Link</th>
              <th className="p-3 text-left font-semibold">File Size</th>
              <th className="p-3 text-right font-semibold w-48"></th>
            </tr>
          </thead>

          <tbody>
            {listItems.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-sky-50 hover:bg-sky-100 transition"
              >
                {/* Checkbox */}
                <td className="p-3 align-middle">
                  <input type="checkbox" />
                </td>

                {/* Name */}
                <td className="p-3 align-middle">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-gray-500" />
                    <span>{item.name}</span>
                  </div>
                </td>

                <td className="p-3 align-middle text-gray-600">
                  {item.lastModified}
                </td>

                {/* LINK + tooltip */}
                <td className="p-3 align-middle relative">
                  <span
                    className="text-blue-600 underline cursor-pointer relative group"
                    onClick={() => copyLink(item.link, index)}
                  >
                    {item.link}
                    <span className="absolute top-1 left-29 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {copiedIndex === index ? "Link Copied" : "Copy Link"}
                    </span>
                  </span>
                </td>

                <td className="p-3 align-middle text-gray-600">
                  {item.filesize}
                </td>

                {/* 3 DOT AREA */}
                <td className="p-3 text-right align-middle relative group w-48">
                  {/* HOVER → MINI ICON ROW */}
                  <div className="hidden group-hover:flex items-center gap-2 absolute -left-7 top-1/2 -translate-y-1/2 min-w-[180px] justify-between  p-1 rounded">
                    <Share2
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                    <Edit
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                    <Download
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                    <Star
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                    <Trash
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                    <Ban
                      size={16}
                      className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    />
                  </div>

                  {/* THREE DOT BUTTON */}
                  <button
                    className="p-1 hover:bg-white rounded-full transition relative z-20"
                    onClick={() =>
                      setMenuIndex(menuIndex === index ? null : index)
                    }
                  >
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>

                  {/* DROPDOWN */}
                  {menuIndex === index && (
                    <div className="absolute right-6 top-9.5 bg-white shadow-lg rounded-md py-1 w-48 z-50">
                      <div className="border-b border-gray-200">
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Download size={16} /> Download
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Edit size={16} /> Rename
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Move size={16} /> Move To
                        </button>
                      </div>
                      <div className="border-b border-gray-200">
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Share2 size={16} /> Share
                        </button>
                        {/* New options: Organize & Folder Color */}
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Star size={16} /> Organize
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <Ban size={16} /> Folder Color
                        </button>
                      </div>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-red-600 w-full">
                        <Trash size={16} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentFiles;
