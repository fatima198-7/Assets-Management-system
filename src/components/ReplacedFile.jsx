"use client";
import React, { useState } from "react";
import CloseButton from "@/components/common/CloseButton";

export default function ReplacedFile({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-[400px]  overflow-hidden">
        {/* Close Button */}
        <div className="absolute right-4 top-4 z-20">
          <CloseButton onClick={onClose} />
        </div>

        <div className="p-6 overflow-y-auto max-h-[85vh] flex flex-col gap-3">
          <div className="flex justify-center">
            <img src="/228.png" alt="replaced-img" className="w-[170px]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-center">
              File Replacement Successfully
            </h3>
            <p className="text-center text-[12px]">
              The file has been successfully replaced with the new file.
            </p>
          </div>
          {/* old+new file */}
          <div>
            <h2 className="text-sm pt-3">Old File</h2>
            <div className="flex gap-4 items-center">
              <div className="border border-gray-300 rounded">
                <img src="/file-1.png" alt="OldFile-img" className="p-1 w-24" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[12px]">Fole Name: Google Testing Doc.pdf</p>
                <p className="text-[12px]">
                  File Type: <span className=" text-[12px] p-3">PDF</span>
                </p>
                <p className="text-[12px]">
                  File Size:{" "}
                  <span className="text-gray-400 text-[12px] p-3">30 MB</span>
                </p>
              </div>
            </div>
            {/* new File */}
            <div>
              <h2 className="text-sm pt-3">New File</h2>
              <div className="flex gap-4 items-center">
                <div className="border border-gray-300 rounded">
                  <img
                    src="/file-2.png"
                    alt="OldFile-img"
                    className="p-1 w-24"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[12px]">
                    Fole Name: Google Testing Doc.pdf
                  </p>
                  <p className="text-[12px]">
                    File Type: <span className=" text-[12px] p-3">PDF</span>
                  </p>
                  <p className="text-[12px]">
                    File Size:{" "}
                    <span className="text-gray-400 text-[12px] p-3">30 MB</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white w-full p-2 rounded"
              onClick={onClose}
            >
              continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
