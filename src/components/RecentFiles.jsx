"use client";
import React, { useState } from "react";
import { MoreVertical, FileText, Copy } from "lucide-react";
import ShareModal from "@/components/ShareModal";
import ReplaceFile from "./ReplaceFile";
import CopyLinkModal from "@/components/CopyLinkModal";
import Rename from "./Rename";
import FileDetailsDrawer from "@/components/FileDetailsDrawer";

function RecentFiles({ iconColor = "text-gray-200", enableCopyModal = false }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isReplaceOpen, setIsReplaceOpen] = useState(false);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isRename, setIsRename] = useState(false);
  const [shareSubmenuIndex, setShareSubmenuIndex] = useState(null);
  const [infoSubmenuIndex, setInfoSubmenuIndex] = useState(null);
  const [selectedInfoFile, setSelectedInfoFile] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isOpenOrganize, setIsOpenOrganize] = useState(false);

  const [selectedRows, setSelectedRows] = useState([]);

  const addToFavorites = (item) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((f) => f.name === item.name);
    if (!exists) {
      favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const baseItem = {
    name: "Google Testing.doc",
    lastModified: "05 Nov 2026",
    link: "https://digidiv-my.sharepoint.com/personal/mudassir_ocyber_work/_layouts/15/2Fdocuments%2FMicrosoft%20Teams%20Chat%20Files%2FO%2Epdf&parentview=?/",
    filesize: "11MB",
  };

  const [listItems, setListItems] = useState(Array(15).fill(baseItem));

  const copyLink = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="rounded-lg py-6 relative">
      {selectedRows.length > 0 ? (
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-t-md border-b border-gray-300">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            {/* Cross */}
            <button
              onClick={() => setSelectedRows([])}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <img src="/cancel-01.svg" alt="cancel" className="w-4 h-4" />
            </button>

            <span className="text-sm font-medium text-gray-700">
              {selectedRows.length} Selected
            </span>

            {/* Action Icons */}
            <div className="flex items-center  ml-4  overflow-x-auto">
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/share.svg" alt="share" className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/download.svg" alt="download" className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/edit.svg" alt="download" className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/star.svg" alt="download" className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/delete.svg" alt="delete" className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <img src="/block.svg" alt="block" className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <MoreVertical size={15} />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <img src="/select-02.svg" alt="grid" className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <table className="min-w-[770px] w-full border-collapse text-sm">
          <thead>
            <tr className="text-black border-b-2 border-gray-200">
              <th className="p-3 text-left font-semibold"></th>
              <th className="p-3 text-left font-semibold">Name ↑</th>
              <th className="p-3 text-left font-semibold">Last Modified</th>
              <th className="p-3 text-left font-semibold">Link</th>
              <th className="p-3 text-left font-semibold">File Size</th>
              <th className="p-3 text-right font-semibold w-48"></th>
            </tr>
          </thead>
        </table>
      )}
      <div className="overflow-x-auto">
        {/* ✅ Table Body Always Visible */}
        <table className="min-w-[770px] w-full border-collapse text-sm">
          <tbody>
            {listItems.map((item, index) => (
              <tr
                key={index}
                className={`transition relative ${
                  selectedRows.includes(index)
                    ? "bg-gray-200"
                    : "odd:bg-white even:bg-sky-50 hover:bg-sky-100"
                }`}
              >
                <td className="p-3 align-middle">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => {
                      if (selectedRows.includes(index)) {
                        setSelectedRows(
                          selectedRows.filter((i) => i !== index)
                        );
                      } else {
                        setSelectedRows([...selectedRows, index]);
                      }
                    }}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
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

                <td
                  className={`p-3 align-top relative ${
                    enableCopyModal
                      ? "max-w-[300px] break-all"
                      : "max-w-[150px] truncate"
                  }`}
                >
                  <span
                    className="text-blue-600 underline cursor-pointer relative group"
                    onClick={() => copyLink(item.link, index)}
                  >
                    <div>{item.link}</div>
                    <span className="absolute top-0 left-5 mt-1 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none shadow whitespace-nowrap">
                      {copiedIndex === index ? "Link Copied" : "Copy Link"}
                    </span>
                  </span>
                </td>

                <td className="p-3 align-middle text-gray-600">
                  {item.filesize}
                </td>

                {/* "3 dots" */}

                <td className="p-3 text-right align-middle relative w-48">
                  <button
                    className="p-1 group hover:bg-white rounded-full transition z-20 relative"
                    onClick={() => {
                      if (enableCopyModal) {
                        setSelectedItem(item);
                        setIsCopyModalOpen(true);
                      } else {
                        setMenuIndex(menuIndex === index ? null : index);
                      }
                    }}
                  >
                    {/* Hover icons */}
                    <div className="hidden group-hover:flex items-center gap-3 absolute -left-45 top-1/2 -translate-y-1/2 px-2 py-1 z-30">
                      <img
                        src="/share.svg"
                        alt="share"
                        className={`${iconColor} cursor-pointer`}
                      />
                      <img src="/edit.svg" alt="edit" className={iconColor} />
                      <img
                        src="/download.svg"
                        alt="download"
                        className={iconColor}
                      />
                      <img
                        src="/star.svg"
                        alt="favorite"
                        className={`${iconColor} cursor-pointer`}
                        onClick={() => addToFavorites(item, index)}
                      />
                      <img
                        src="/delete.svg"
                        alt="delete"
                        className={iconColor}
                      />
                      <img src="/block.svg" alt="block" className={iconColor} />
                    </div>
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>

                  {/* Main dropdown */}
                  {!enableCopyModal && menuIndex === index && (
                    <div className="absolute right-6 top-9 bg-white shadow-sm rounded-md py-1 w-48 z-50">
                      {/* Replace */}
                      <div className="border-b border-gray-200">
                        <button
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsReplaceOpen(true);
                            setMenuIndex(null);
                          }}
                        >
                          <img src="/replace.svg" alt="replace" /> Replace
                        </button>
                      </div>

                      {/* Download */}
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M7.99992 9.66667L7.99992 3M7.99992 9.66667C7.5331 9.66667 6.66094 8.33713 6.33325 8M7.99992 9.66667C8.46674 9.66667 9.3389 8.33713 9.66659 8"
                            stroke="#03111E"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3333 11C13.3333 12.6547 12.988 13 11.3333 13H4.66663C3.01196 13 2.66663 12.6547 2.66663 11"
                            stroke="#03111E"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Download
                      </button>

                      {/* Rename */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        onClick={() => {
                          setSelectedItem(item);
                          setIsRename(true);
                          setMenuIndex(null);
                        }}
                      >
                        <img src="/edit.svg" alt="rename" /> Rename
                      </button>

                      {/* Share */}
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
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3.45342 10.1982C2.61504 10.6897 0.416849 11.6931 1.75569 12.9486C2.40971 13.562 3.13811 14.0007 4.05389 14.0007H9.27953C10.1953 14.0007 10.9237 13.562 11.5777 12.9486C12.9166 11.6931 10.7184 10.6896 9.88 10.1982C7.914 9.0459 5.41941 9.0459 3.45342 10.1982Z"
                              stroke="#03111E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.33333 4.66667C9.33333 6.13943 8.13943 7.33333 6.66667 7.33333C5.19391 7.33333 4 6.13943 4 4.66667C4 3.19391 5.19391 2 6.66667 2C8.13943 2 9.33333 3.19391 9.33333 4.66667Z"
                              stroke="#03111E"
                            />
                            <path
                              d="M13 2.66602V5.99935M14.6667 4.33268L11.3334 4.33268"
                              stroke="#03111E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Share
                        </button>

                        {submenuIndex === index && (
                          <div className="absolute -left-40 top-30 bg-white shadow-sm rounded-md py-1 w-40 z-50">
                            <button
                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                              onClick={() => {
                                setSelectedItem(item);
                                setIsShareOpen(true);
                                setSubmenuIndex(null);
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                {/* Same share icon */}
                              </svg>
                              Share
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

                      {/* Organize */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        onClick={() => {
                          setIsOpenOrganize(
                            isOpenOrganize === index ? null : index
                          );
                          setShareSubmenuIndex(null);
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.71361 14.0002H7.00469C4.33119 14.0002 2.99444 14.0002 2.16389 12.9696C1.33334 11.9391 1.33334 10.2804 1.33334 6.96313V4.8128C1.33334 3.53454 1.33334 2.89541 1.54903 2.41584C1.70279 2.07398 1.93012 1.7919 2.20563 1.60113C2.59214 1.3335 3.10723 1.3335 4.13741 1.3335C4.79742 1.3335 5.12742 1.3335 5.41629 1.46791C6.07586 1.7748 6.34783 2.51823 6.64545 3.25681L7.00469 4.14831M4.66943 4.14831H10.3658C11.5606 4.14831 12.158 4.14831 12.5871 4.5041C12.7729 4.65812 12.9324 4.85604 13.0565 5.08655C13.2498 5.44552 13.3128 5.89938 13.3333 6.61127"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.06373 8.38399C3.35129 7.6179 3.49506 7.23485 3.77565 6.9943C4.22858 6.60601 4.87977 6.67109 5.4378 6.67109H11.5016C13.1528 6.67109 13.9784 6.67109 14.3904 7.20238C15.0976 8.1144 14.2633 9.59378 13.9272 10.4892C13.3247 12.0943 13.0235 12.8969 12.4234 13.3864C11.5092 14.1323 10.1793 13.9894 9.07596 13.9894H6.62483C4.2628 13.9894 3.08179 13.9894 2.46762 13.2581C1.33383 11.9081 2.55381 9.74254 3.06373 8.38399Z"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                        </svg>
                        Organize
                      </button>

                      {isOpenOrganize === index && (
                        <div className="absolute -left-40 top-37 bg-white shadow-sm rounded-md py-1 w-40 z-50">
                          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              {/* Move icon */}
                            </svg>
                            Move
                          </button>
                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                            onClick={() => copyLink(item.link, index)}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              {/* Star / Add to starred icon */}
                            </svg>
                            Add to starred
                          </button>
                        </div>
                      )}

                      {/* File information */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInfoSubmenuIndex(
                            infoSubmenuIndex === index ? null : index
                          );
                          setShareSubmenuIndex(null);
                        }}
                      >
                        <img src="/information-circle.svg" alt="info" />
                        File information
                      </button>

                      {infoSubmenuIndex === index && (
                        <div className="absolute -left-40 top-48 bg-white shadow-sm rounded-md py-1 w-40 z-50">
                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                            onClick={() => {
                              setSelectedInfoFile(item);
                              setIsInfoOpen(true);
                              setInfoSubmenuIndex(null);
                              setMenuIndex(null);
                            }}
                          >
                            <img src="/information-circle.svg" alt="info" />{" "}
                            Details
                          </button>
                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                            onClick={() => {
                              alert("Lock Action");
                              setInfoSubmenuIndex(null);
                            }}
                          >
                            <img src="/lock.svg" alt="lock" /> Lock
                          </button>
                        </div>
                      )}

                      {/* Delete */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        onClick={() => {
                          const trash =
                            JSON.parse(localStorage.getItem("trash")) || [];
                          trash.push(item);
                          localStorage.setItem("trash", JSON.stringify(trash));
                          const newList = [...listItems];
                          newList.splice(index, 1);
                          setListItems(newList);
                          setMenuIndex(null);
                        }}
                      >
                        <img src="/delete.svg" alt="" />
                        Delete
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

      {isRename && selectedItem && (
        <Rename file={selectedItem} onClose={() => setIsRename(false)} />
      )}

      {enableCopyModal && isCopyModalOpen && selectedItem && (
        <CopyLinkModal
          file={selectedItem}
          onClose={() => setIsCopyModalOpen(false)}
        />
      )}

      <FileDetailsDrawer
        open={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        file={selectedInfoFile}
      />
    </div>
  );
}

export default RecentFiles;
