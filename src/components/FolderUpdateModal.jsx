"use client";
import { useState } from "react";

export default function FolderUpdateModal({ onClose }) {
  const [folderName, setFolderName] = useState("");
  const [folderColor, setFolderColor] = useState("#3b82f6");

  const presetColors = [
    "#3b82f6",
    "#ef4444",
    "#22c55e",
    "#eab308",
    "#a855f7",
    "#14b8a6",
    "#f97316",
    "#6366f1",
    "#db2777",
    "#2dd4bf",
    "#fb7185",
    "#84cc16",
    "#06b6d4",
    "#f59e0b",
    "#7c3aed",
    "#dc2626",
    "#4ade80",
    "#0ea5e9",
    "#d946ef",
    "#10b981",
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white flex flex-col gap-2 w-96 rounded-lg shadow p-5">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Create a Folder</h2>
          <button onClick={onClose}>
            <img src="/cancel-01.svg" alt="" />
          </button>
        </div>

        {/* Folder Name */}
        <label className="text-sm">Folder Name</label>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="w-full p-2 border outline-none border-gray-200 rounded mt-1 mb-4"
          placeholder="Enter folder name"
        />

        {/* Folder Color */}
        <label className="text-sm">Folder Color</label>

        {/* Preset Color Dots */}
        <div className="flex flex-wrap gap-2 mb-4 border border-gray-200 p-4">
          {presetColors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setFolderColor(color)}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={onClose}
            className="px-3 py-1 w-full border border-gray-400 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Folder Updated:", folderName, folderColor);
              onClose();
            }}
            className="px-3 py-1 w-full bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Folder
          </button>
        </div>
      </div>
    </div>
  );
}
