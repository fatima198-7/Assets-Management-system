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

  const addToFavorites = (item, index) => {
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

  const [selectedRows, setSelectedRows] = useState([]); // NEW

  const copyLink = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="rounded-lg py-6 relative">
      <div className="overflow-x-auto">
        <table className="min-w-[770px] w-full border-collapse text-sm">
          <thead>
            <tr className="text-black border-b-2 border-gray-200">
              <th className="p-3 text-left font-semibold">
                <input type="checkbox" className="accent-blue-600" />
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
                className={`group transition relative ${
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
                  <div className="hidden group-hover:flex items-center gap-3 absolute -left-5 top-1/2 -translate-y-1/2 px-2 py-1 z-30">
                    <img
                      src="/share.svg"
                      alt="share"
                      className={`${iconColor} cursor-pointer`}
                    />
                    <img
                      src="/edit.svg"
                      alt="edit"
                      className={`${iconColor}`}
                    />
                    <img
                      src="/download.svg"
                      alt="download"
                      className={`${iconColor}`}
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
                      className={`${iconColor}`}
                    />
                    <img
                      src="/block.svg"
                      alt="block"
                      className={`${iconColor}`}
                    />
                  </div>

                  <button
                    className="p-1 hover:bg-white rounded-full transition z-20 relative"
                    onClick={() => {
                      if (enableCopyModal) {
                        setSelectedItem(item);
                        setIsCopyModalOpen(true);
                      } else {
                        setMenuIndex(menuIndex === index ? null : index);
                      }
                    }}
                  >
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>

                  {!enableCopyModal && menuIndex === index && (
                    <div className="absolute right-6 top-9 bg-white shadow-sm rounded-md py-1 w-48 z-50">
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
                      <div className="border-b border-gray-200">
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99992 9.66667L7.99992 3M7.99992 9.66667C7.5331 9.66667 6.66094 8.33713 6.33325 8M7.99992 9.66667C8.46674 9.66667 9.3389 8.33713 9.66659 8"
                              stroke="#03111E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.3333 11C13.3333 12.6547 12.988 13 11.3333 13H4.66663C3.01196 13 2.66663 12.6547 2.66663 11"
                              stroke="#03111E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Download
                        </button>
                        <button
                          onClick={() => {
                            setSelectedItem(item); // yeh zaroori hai
                            setIsRename(true);
                            setMenuIndex(null); // dropdown bhi close ho jaye
                          }}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        >
                          <img src="/edit.svg" alt="" />
                          Rename
                        </button>

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
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.45342 10.1982C2.61504 10.6897 0.416849 11.6931 1.75569 12.9486C2.40971 13.562 3.13811 14.0007 4.05389 14.0007H9.27953C10.1953 14.0007 10.9237 13.562 11.5777 12.9486C12.9166 11.6931 10.7184 10.6896 9.88 10.1982C7.914 9.0459 5.41941 9.0459 3.45342 10.1982Z"
                              stroke="#03111E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.33333 4.66667C9.33333 6.13943 8.13943 7.33333 6.66667 7.33333C5.19391 7.33333 4 6.13943 4 4.66667C4 3.19391 5.19391 2 6.66667 2C8.13943 2 9.33333 3.19391 9.33333 4.66667Z"
                              stroke="#03111E"
                            />
                            <path
                              d="M13 2.66602V5.99935M14.6667 4.33268L11.3334 4.33268"
                              stroke="#03111E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Share
                        </button>

                        {submenuIndex === index && (
                          <div className="absolute -left-40 top-37 bg-white shadow-sm rounded-md py-1 w-40 z-50">
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
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.45342 10.1982C2.61504 10.6897 0.416849 11.6931 1.75569 12.9486C2.40971 13.562 3.13811 14.0007 4.05389 14.0007H9.27953C10.1953 14.0007 10.9237 13.562 11.5777 12.9486C12.9166 11.6931 10.7184 10.6896 9.88 10.1982C7.914 9.0459 5.41941 9.0459 3.45342 10.1982Z"
                                  stroke="#03111E"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.33333 4.66667C9.33333 6.13943 8.13943 7.33333 6.66667 7.33333C5.19391 7.33333 4 6.13943 4 4.66667C4 3.19391 5.19391 2 6.66667 2C8.13943 2 9.33333 3.19391 9.33333 4.66667Z"
                                  stroke="#03111E"
                                />
                                <path
                                  d="M13 2.66602V5.99935M14.6667 4.33268L11.3334 4.33268"
                                  stroke="#03111E"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
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

                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.71364 14.0007H7.00473C4.33122 14.0007 2.99447 14.0007 2.16392 12.9701C1.33337 11.9396 1.33337 10.2809 1.33337 6.96361V4.81329C1.33337 3.53503 1.33337 2.8959 1.54906 2.41633C1.70282 2.07447 1.93015 1.79239 2.20566 1.60161C2.59217 1.33398 3.10726 1.33398 4.13744 1.33398C4.79745 1.33398 5.12745 1.33398 5.41633 1.4684C6.07589 1.77529 6.34786 2.51872 6.64548 3.2573L7.00473 4.1488M4.66946 4.1488H10.3658C11.5606 4.1488 12.158 4.1488 12.5871 4.50459C12.7729 4.65861 12.9324 4.85653 13.0566 5.08704C13.2499 5.44601 13.3129 5.89987 13.3334 6.61176"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.06373 8.38497C3.35129 7.61887 3.49506 7.23582 3.77565 6.99528C4.22858 6.60699 4.87977 6.67207 5.4378 6.67207H11.5016C13.1528 6.67207 13.9784 6.67207 14.3904 7.20336C15.0976 8.11538 14.2633 9.59476 13.9272 10.4901C13.3247 12.0953 13.0235 12.8979 12.4234 13.3874C11.5092 14.1333 10.1793 13.9903 9.07596 13.9903H6.62483C4.2628 13.9903 3.08179 13.9903 2.46762 13.2591C1.33383 11.9091 2.55381 9.74352 3.06373 8.38497Z"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                        </svg>
                        Organize
                      </button>

                      <button
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInfoSubmenuIndex(
                            infoSubmenuIndex === index ? null : index
                          );
                          setShareSubmenuIndex(null); // ensure only one is open
                        }}
                      >
                        <img src="/information-circle.svg" alt="info" />
                        File information
                      </button>

                      {infoSubmenuIndex === index && (
                        <div className="absolute -left-40 top-47 bg-white shadow-sm rounded-md py-1 w-40 z-50">
                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                            onClick={() => {
                              setSelectedInfoFile(item); // correct file pass ho gi
                              setIsInfoOpen(true); // Drawer open ho jayega
                              setInfoSubmenuIndex(null); // close the sub menu index too
                              setMenuIndex(null); // dropdown close ho jaye
                            }}
                          >
                            <img src="/information-circle.svg" alt="info" />{" "}
                            Details
                          </button>

                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
                            onClick={() => {
                              alert("Lock Action ");
                              setInfoSubmenuIndex(null);
                            }}
                          >
                            <img src="/lock.svg" alt="lock" />
                            Lock
                          </button>
                        </div>
                      )}

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
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 3.66797L12.5868 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5265C11.7889 13.83 11.5164 14.0862 11.2005 14.2786C10.5614 14.668 9.70599 14.668 7.99516 14.668C6.28208 14.668 5.42554 14.668 4.78604 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3447L3 3.66797"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                          <path
                            d="M2 3.66732H14M10.7038 3.66732L10.2487 2.72847C9.94638 2.10482 9.79522 1.793 9.53448 1.59852C9.47664 1.55538 9.4154 1.51701 9.35135 1.48379C9.06261 1.33398 8.71608 1.33398 8.02302 1.33398C7.31255 1.33398 6.95732 1.33398 6.66379 1.49006C6.59873 1.52466 6.53666 1.56458 6.4782 1.60943C6.21443 1.81178 6.06709 2.13502 5.7724 2.78149L5.36862 3.66732"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                          <path
                            d="M6.33337 11L6.33337 7"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                          <path
                            d="M9.66663 11L9.66663 7"
                            stroke="#03111E"
                            stroke-linecap="round"
                          />
                        </svg>
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
