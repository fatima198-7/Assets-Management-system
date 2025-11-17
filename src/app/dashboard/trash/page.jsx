"use client";
import { useEffect, useState } from "react";
import { FileText, MoreVertical, Trash } from "lucide-react";
import Card from "@/components/common/Card";
import NextPage from "@/components/common/NextPage";

export default function FavoritePage() {
  const [trashList, setTrashList] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const storedTrash = JSON.parse(localStorage.getItem("trash")) || [];
    setTrashList(storedTrash);
  }, []);

  const deleteForever = (index) => {
    const updatedTrash = [...trashList];
    updatedTrash.splice(index, 1);
    localStorage.setItem("trash", JSON.stringify(updatedTrash));
    setTrashList(updatedTrash);
    setMenuIndex(null);
  };

  return (
    <div className="p-6">
      {/* Header */}
      {/* Header */}
      <div className="flex justify-between pb-3">
        <Card title="Trash" />
        {trashList.length > 0 && (
          <div className="flex gap-2">
            <button className="group flex items-center gap-2 px-3 py-2 text-black rounded bg-gray-100 hover:bg-gray-200">
              <img
                src="/arrow-up-down.svg"
                alt="dashboard"
                className="w-4 h-4"
              />
              Sort
            </button>
            <button
              className="group flex items-center gap-2 px-3 py-2 text-black rounded bg-gray-100 hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src="/dashboard-square.svg"
                alt="dashboard"
                className="w-4 h-4"
              />
              {isOpen ? "Hide" : "View"}
            </button>
          </div>
        )}
      </div>

      {isOpen ? (
        trashList.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-gray-400">
            <img src="/166.png" alt="hidden" className="w-[200px]" />
            <p className="text-lg font-semibold">Trash Hidden</p>
            <p className="text-sm text-gray-500">Click "View" to show again.</p>
          </div>
        ) : (
          <div className="overflow-x-auto max-h-[99vh] rounded ">
            <table className="min-w-[770px] w-full border-collapse text-sm">
              {/* Table Head */}
              <thead>
                <tr className="text-black border-b-2 border-gray-200 sticky top-0 bg-white z-10">
                  <th className="p-3 text-left font-semibold"></th>
                  <th className="p-3 text-left font-semibold">Name</th>
                  <th className="p-3 text-left font-semibold">Last Modified</th>
                  <th className="p-3 text-left font-semibold">Link</th>
                  <th className="p-3 text-left font-semibold">File Size</th>
                  <th className="p-3 text-right font-semibold w-40">Actions</th>
                </tr>
              </thead>

              <tbody>
                {trashList.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-sky-50 hover:bg-sky-100 transition relative"
                  >
                    <td className="p-3 align-middle">
                      <input type="checkbox" />
                    </td>

                    <td className="p-3 align-middle">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-gray-500" />
                        {item.name}
                      </div>
                    </td>

                    <td className="p-3 align-middle text-gray-600">
                      {item.lastModified}
                    </td>

                    <td className="p-3 align-middle max-w-[200px] truncate text-blue-600 underline cursor-pointer">
                      {item.link}
                    </td>

                    <td className="p-3 align-middle text-gray-600">
                      {item.filesize}
                    </td>

                    <td className="p-3 text-right align-middle relative w-40">
                      {/* Three Dots Button */}
                      <button
                        className="p-1 hover:bg-white rounded-full transition z-20 relative"
                        onClick={() =>
                          setMenuIndex(menuIndex === index ? null : index)
                        }
                      >
                        <MoreVertical size={18} className="text-gray-600" />
                      </button>

                      {/* Dropdown Menu */}
                      {menuIndex === index && (
                        <div className="absolute right-0 top-8 bg-white shadow-sm rounded-md py-1 w-32 z-50">
                          <button
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-red-600"
                            onClick={() => deleteForever(index)}
                          >
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
        )
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-gray-500">
          <img src="/153.png" alt="empty trash" className="w-[200px]" />
          <h2 className="text-center text-xl font-semibold text-black">
            Your Trash is Empty
          </h2>
          <p className="text-center text-[12px] text-gray-400 ">
            It looks like there's nothing here!
          </p>
          <p className="text-center text-[12px] text-gray-400 ">
            If you no longer need certain items, move then to the trash.
          </p>
          <p className="text-center text-[12px] text-gray-400 ">
            Remember, items in the trash will be deleted permanently after 30
            days.
          </p>
        </div>
      )}
    </div>
  );
}
