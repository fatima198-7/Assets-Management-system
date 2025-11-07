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
  Copy,
} from "lucide-react";
import ShareModal from "@/components/ShareModal";
import ReplaceFile from "./ReplaceFile";
import CopyLinkModal from "@/components/CopyLinkModal";

function RecentFiles({ iconColor = "text-gray-500", enableCopyModal = false }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isReplaceOpen, setIsReplaceOpen] = useState(false);
  // const [enableCopyModal, setEnableCopyModal] = useState(false);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);

  const baseItem = {
    name: "Google Testing.doc",
    lastModified: "05 Nov 2026",
    link: "/EVonMBw8jGlw?e=rbggHMe",
    filesize: "11MB",
  };

  const listItems = Array(15).fill(baseItem);

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
        <table className="min-w-[770px] w-full border-collapse text-sm">
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
                className="group odd:bg-white even:bg-sky-50 hover:bg-sky-100 transition relative"
              >
                <td className="p-3 align-middle">
                  <input type="checkbox" />
                </td>

                <td className="p-3 align-middle">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-gray-500" />
                    <span>{item.name}</span>
                  </div>
                </td>

                <td className="p-3 align-middle text-gray-600">
                  {item.lastModified}
                </td>

                <td className="p-3 align-middle relative">
                  <span
                    className="text-blue-600 underline cursor-pointer relative group"
                    onClick={() => copyLink(item.link, index)}
                  >
                    {item.link}
                    <span className="absolute top-1 left-0 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {copiedIndex === index ? "Link Copied" : "Copy Link"}
                    </span>
                  </span>
                </td>

                <td className="p-3 align-middle text-gray-600">
                  {item.filesize}
                </td>

                <td className="p-3 text-right align-middle relative w-48">
                  {/* Mini Hover Icons */}
                  <div className="hidden group-hover:flex items-center gap-3 absolute right-9 top-1/2 -translate-y-1/2  px-2 py-1 z-30">
                    <Share2 size={16} className={`${iconColor}  transition`} />
                    <Edit size={16} className={`${iconColor}  transition`} />
                    <Download size={16} className={`${iconColor} transition`} />
                    <Star size={16} className={`${iconColor}  transition`} />
                    <Trash size={16} className={`${iconColor}  transition`} />
                    <Ban size={16} className={`text-gray-500  transition`} />
                  </div>

                  {/* Three Dots */}
                  <button
                    className="p-1 hover:bg-white rounded-full transition z-20 relative"
                    onClick={() => {
                      if (enableCopyModal) {
                        setSelectedItem(item); // jis file ka modal khulna he
                        setIsCopyModalOpen(true); // modal open
                      } else {
                        setMenuIndex(menuIndex === index ? null : index); // normal dropdown
                      }
                    }}
                  >
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>

                  {/* Dropdown */}
                  {!enableCopyModal && menuIndex === index && (
                    <div className="absolute right-6 top-9 bg-white shadow-sm rounded-md py-1 w-48 z-50">
                      <div className=" border-b border-gray-200">
                        <button
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsReplaceOpen(true);
                            setMenuIndex(null);
                          }}
                        >
                          Replace
                        </button>
                      </div>
                      <div className=" border-b border-gray-200">
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

                      <div>
                        <button
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSubmenuIndex(
                              submenuIndex === index ? null : index
                            );
                          }}
                        >
                          <Share2 size={16} /> Share
                        </button>

                        {submenuIndex === index && (
                          <div className="absolute -left-40 top-0 bg-white shadow-sm rounded-md py-1 w-40 z-50">
                            <button
                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                              onClick={() => {
                                setSelectedItem(item);
                                setIsShareOpen(true);
                                setSubmenuIndex(null);
                              }}
                            >
                              <Share2 size={16} /> Share
                            </button>
                            <button
                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                              onClick={() => copyLink(item.link, index)}
                            >
                              <Copy size={16} /> Copy Link
                            </button>
                          </div>
                        )}
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

      {isShareOpen && selectedItem && (
        <ShareModal file={selectedItem} onClose={() => setIsShareOpen(false)} />
      )}

      {isReplaceOpen && selectedItem && (
        <ReplaceFile
          file={selectedItem}
          onClose={() => setIsReplaceOpen(false)}
        />
      )}

      {enableCopyModal && isCopyModalOpen && selectedItem && (
        <CopyLinkModal
          file={selectedItem}
          onClose={() => setIsCopyModalOpen(false)}
        />
      )}
    </div>
  );
}

export default RecentFiles;
