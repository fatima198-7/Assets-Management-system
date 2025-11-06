"use client";
import React from "react";
import { Copy } from "lucide-react";

const ShareModal = ({
  open,
  onClose,
  file,
  shareName,
  shareMessage,
  setShareName,
  setShareMessage,
  copyLink,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-5 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-lg font-semibold mb-3">Share File</h2>

        <input
          type="text"
          placeholder="Add a name"
          value={shareName}
          onChange={(e) => setShareName(e.target.value)}
          className="w-full border rounded p-2 mb-3"
        />

        <textarea
          placeholder="Add a message"
          value={shareMessage}
          onChange={(e) => setShareMessage(e.target.value)}
          className="w-full border rounded p-2 h-20 mb-4"
        />

        <div className="flex justify-between gap-2">
          <button
            onClick={() => copyLink(file?.link)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            <Copy size={16} /> Copy Link
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send
          </button>
        </div>

        <button
          className="mt-4 text-center w-full py-2 border rounded hover:bg-gray-100"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
