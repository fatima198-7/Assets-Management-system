"use client";
import { X } from "lucide-react";

export default function CloseButton({ onClick, size = 20 }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-red-600 transition p-1 rounded-full hover:bg-gray-100"
    >
      <X size={size} />
    </button>
  );
}
