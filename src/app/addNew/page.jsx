"use client";
import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import CloseButton from "@/components/common/CloseButton";

export default function AddNew() {
  const [isOpen, setIsOpen] = useState(true);
  const [files, setFiles] = useState([
    { name: "Google Testing Doc.pdf", size: "30MB", progress: 100 },
  ]);

  const onClose = () => setIsOpen(false);
  const handleFileSelect = () => document.getElementById("fileInput").click();
  const removeFile = (index) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative bg-white p-6 rounded-xl w-[365px] md:w-[440px] lg:w-[770px] shadow-lg flex flex-col gap-6 z-10">
        {/* Close Button */}
        <div className="absolute right-4 top-4">
          <CloseButton onClick={onClose} />
        </div>

        <h2 className="text-lg font-semibold">Upload Files</h2>

        <form encType="multipart/form-data" className="flex flex-col gap-5">
          {/* Upload Box */}
          <div
            onClick={handleFileSelect}
            className="border-2 border-dashed border-gray-400 rounded-xl py-10 cursor-pointer flex flex-col items-center justify-center text-center hover:border-blue-600 transition bg-[#eff8ff]"
          >
            <Upload
              size={42}
              className="text-blue-600 bg-white p-2 rounded-full shadow"
            />
            <p className="mt-3 text-gray-700 font-medium">
              <span className="text-blue-600 underline cursor-pointer">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
          </div>

          <input type="file" id="fileInput" name="file" className="hidden" />

          {/* Files List */}
          {files.map((file, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-3 flex items-center justify-between gap-4 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-[45%]">
                <FileText size={18} className="text-blue-600" />
                <div>
                  <p className="text-gray-900 text-sm font-medium">
                    {file.name}
                  </p>
                  <p className="text-gray-400 text-xs">{file.size}</p>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-3">
                <div className="w-full h-2 rounded-full bg-[#dbeafe]">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${file.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  {file.progress}%
                </span>
              </div>

              <CloseButton onClick={() => removeFile(index)} />
            </div>
          ))}
          {/* description */}
          <div>
            <h2 className="font-medium pb-2">Description</h2>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Add Descrption"
              className="w-full border border-blue-400 bg-[#eff8ff] rounded-2 p-2 text-[14px]"
            />
          </div>
          {/* tags */}
          <div>
            <h2>Tags</h2>
            <div className="border border-gray-300 p-2"></div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Import
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
