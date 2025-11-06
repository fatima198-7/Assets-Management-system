"use client";
import { Copy, Send, X, Eye, Edit2, EyeOff, EyeCheck } from "lucide-react";
import { useState } from "react";

export default function ShareModal({ file, onClose }) {
  const [message, setMessage] = useState("");
  const [permission, setPermission] = useState("Can View"); // default
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(file.link);
  };

  const permissions = [
    { label: "Can Edit", icon: <Edit2 size={16} /> },
    { label: "Can View", icon: <Eye size={16} /> },
    { label: "Can't Edit", icon: <EyeOff size={16} /> },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md w-[360px] shadow-lg relative flex flex-col gap-6">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-3 top-3">
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-3">Share</h2>

        {/* Input with Eye + Dropdown */}
        <div className="relative w-full flex items-center ">
          <input
            type="text"
            placeholder="Add a name/group/email"
            className="flex-1 border border-gray-300 p-2 outline-0 rounded"
          />
          <div className="relative ">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 border border-gray-300 border-l-0 p-3 rounded "
            >
              <Eye size={16} />
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg w-[140px] z-10">
                {permissions.map((perm) => (
                  <button
                    key={perm.label}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setPermission(perm.label);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {perm.icon}
                    {perm.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <textarea
          placeholder="Add a message"
          className="w-full border border-gray-300 outline-0 p-2 rounded mb-3"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="flex gap-4">
          <button
            onClick={copyLink}
            className="flex items-center gap-2 border border-blue-500 p-2 rounded-[1.5px] w-full mb-3 justify-center bg-[#b3e8f156]"
          >
            <Copy size={16} /> Copy Link
          </button>

          <button className="bg-blue-600 text-white p-2 rounded-[1.5px] w-full flex items-center gap-2 justify-center">
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
