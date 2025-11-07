"use client";
import React, { useState } from "react";
import { Upload, FileText } from "lucide-react";
import CloseButton from "@/components/common/CloseButton";
import ReplacedFile from "./ReplacedFile";

export default function ReplaceFile({ file, onClose }) {
  const [files, setFiles] = useState([file]);
  const [isReplacedOpen, setIsReplacedOpen] = useState(false);

  const handleFileSelect = () => document.getElementById("fileInput").click();
  const removeFile = (index) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const handleReplace = () => {
    setIsReplacedOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 p-4">
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden">
          {/* Close Button */}
          <div className="absolute right-4 top-4 z-20">
            <CloseButton onClick={onClose} />
          </div>

          <div className="p-6 overflow-y-auto max-h-[85vh] flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Replace File</h2>
            <div>
              <h2 className="text-md pb-1">Old File</h2>
              <div className="flex gap-4 items-center">
                <div className="border border-gray-300 rounded">
                  <img
                    src="/old-img.png"
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

            <h2 className="text-md">Upload new file</h2>

            <form encType="multipart/form-data" className="space-y-4">
              {/* Upload Box */}
              <div
                onClick={handleFileSelect}
                className="border-2 border-dashed border-gray-400 rounded-xl py-4 cursor-pointer flex flex-col items-center justify-center text-center hover:border-blue-600 transition bg-[#eff8ff]"
              >
                <Upload
                  size={42}
                  className="text-blue-600 bg-white p-2 rounded-full shadow"
                />
                <p className="mt-3 text-gray-700 text-[14px] font-medium">
                  <span className="text-blue-600 underline cursor-pointer">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
              </div>

              <input
                type="file"
                id="fileInput"
                name="file"
                className="hidden"
              />

              {/* Uploaded Files */}
              <div className="flex flex-col py-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg  px-3 py-2 flex items-center justify-between bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-3 w-[45%]">
                      <FileText size={16} className="text-blue-600" />
                      <div>
                        <p className="text-gray-900 text-[12px] font-medium">
                          {file.name}
                        </p>
                        <p className="text-gray-400 text-[11px]">{file.size}</p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center gap-3">
                      <div className="w-full h-2 bg-[#dbeafe] rounded-full">
                        <div
                          className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                          style={{ width: `${file.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-[11px] font-medium text-blue-600">
                        {file.progress}%
                      </span>
                    </div>

                    <CloseButton onClick={() => removeFile(index)} />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-medium text-[14px] pb-1">Description</h2>
                <input
                  type="text"
                  placeholder="Add Description"
                  className="w-full border border-blue-400 bg-[#eff8ff] rounded-md p-2 text-[12px]"
                />
              </div>

              {/* Tags */}
              <div className="py-3">
                <h2 className="font-medium text-[14px] pb-1">Tags</h2>
                <div className="border border-gray-300 p-2 flex gap-2 flex-wrap rounded-md bg-white">
                  {["Google Doc", "Resume", "Testing"].map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center text-[11px] bg-white border px-2 py-1 rounded shadow-sm"
                    >
                      {tag}
                      <img
                        src="cancel-01.png"
                        alt="x"
                        className="w-3 h-3 ml-1 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Static Rows */}
              <div className="flex flex-col gap-2">
                <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between gap-4 bg-white shadow-sm">
                  <div className="flex items-center gap-3 min-w-[45%] ">
                    <FileText size={18} className="text-blue-600" />
                    <div>
                      <p className="text-gray-900 text-[11px] font-medium">
                        Beloz Documentation.docs
                      </p>
                      <p className="text-gray-400 text-xs">20MB</p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-full h-2 rounded-full bg-[#dbeafe]">
                      <div
                        className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: "21%" }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-blue-600">
                      21%
                    </span>
                  </div>

                  <CloseButton onClick={() => {}} />
                </div>

                <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between gap-4 bg-white shadow-sm">
                  <div className="flex items-center gap-3 min-w-[45%]">
                    <FileText size={18} className="text-blue-600" />
                    <div>
                      <p className="text-gray-900 text-[11px] font-medium">
                        OÇyber Logo.ai
                      </p>
                      <p className="text-gray-400 text-xs">15MB</p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-full h-2 rounded-full bg-[#dbeafe]">
                      <div
                        className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-blue-600">
                      50%
                    </span>
                  </div>

                  <CloseButton onClick={() => {}} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleReplace}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Replace File
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isReplacedOpen && (
        <ReplacedFile onClose={() => setIsReplacedOpen(false)} />
      )}
    </>
  );
}
