"use client";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import Card from "@/components/common/Card";
import NextPage from "@/components/common/NextPage";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (index) => {
    const updated = [...favorites];
    updated.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  // 🔹 Icon color variable
  const iconColor = "text-gray-400";

  return (
    <div className="relative p-1 min-h-[99vh] h-full w-full overflow-y-hidden">
      <div className="flex justify-between pb-9">
        <Card title="Favorites" />
        <button
          className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          Click me
        </button>
      </div>

      {isOpen ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img src="/fav.png" alt="open" className="w-[200px]" />
          <h2 className="text-center text-xl text-black">No Favorites Yet</h2>
          <p className="text-center text-gray-500 text-sm max-w-sm">
            Haven't found anything worth starring yet? Add stars to the files
            you want to easily find later.
          </p>
        </div>
      ) : favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-gray-500">
          <img src="/fav.png" alt="empty" className="w-[200px]" />
          <h2 className="text-center text-xl font-bold text-black">
            Your Favorite List is Empty
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto max-h-[99vh] rounded">
          <table className="min-w-[770px] w-full border-collapse text-sm">
            <thead>
              <tr className="text-black border-b-2 border-gray-200 sticky top-0 bg-white z-10">
                <th className="p-3 text-left"></th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Last Modified</th>
                <th className="p-3 text-left">Link</th>
                <th className="p-3 text-left">File Size</th>
                <th className="p-3 text-right w-40">Actions</th>
              </tr>
            </thead>

            <tbody>
              {favorites.map((item, index) => (
                <tr
                  key={index}
                  className="group odd:bg-white even:bg-sky-50 hover:bg-sky-100 transition relative"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <FileText size={16} className="text-gray-500" />
                    {item.name}
                  </td>

                  <td className="p-3 text-gray-600">{item.lastModified}</td>

                  {/* 🔹 Link truncated */}
                  <td
                    className="p-3 max-w-[200px] truncate text-blue-600 underline cursor-pointer"
                    title={item.link}
                  >
                    {item.link}
                  </td>

                  <td className="p-3 text-gray-600">{item.filesize}</td>

                  {/* Actions with hover icons */}
                  <td className="p-3 text-right relative w-48">
                    {/* Hover icons */}
                    <div className="hidden group-hover:flex items-center gap-3 absolute -left-5 top-1/2 -translate-y-1/2 px-2 py-1 z-30">
                      <img
                        src="/user-gray.svg"
                        alt="share"
                        className={`w-4 h-4 ${iconColor} cursor-pointer`}
                      />
                      <img
                        src="/edit-gray.svg"
                        alt="edit"
                        className={`w-4 h-4 ${iconColor} cursor-pointer`}
                      />
                      <img
                        src="/download-gray.svg"
                        alt="download"
                        className={`w-4 h-4 ${iconColor} cursor-pointer`}
                      />
                      <img
                        src="/star-off.svg"
                        alt="favorite"
                        className={`w-4 h-4 ${iconColor} cursor-pointer`}
                        onClick={() => removeFromFavorites(index)}
                      />
                      <img
                        src="/elements-gray.svg"
                        alt="delete"
                        className={`w-4 h-4 ${iconColor} cursor-pointer`}
                      />
                      <img
                        src="/block.svg"
                        alt="block"
                        className={`w-6 h-6 ${iconColor} cursor-pointer`}
                      />
                    </div>

                    {/* 3 Dots button */}
                    <button
                      className="px-2 py-1 hover:bg-gray-200 rounded transition"
                      onClick={() =>
                        setMenuIndex(menuIndex === index ? null : index)
                      }
                    >
                      ⋮
                    </button>

                    {/* Dropdown menu (when 3 dots clicked) */}
                    {menuIndex === index && (
                      <div className="absolute right-0 top-8 bg-white shadow-md rounded-md py-1 w-36 z-50">
                        <button
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left"
                          onClick={() => removeFromFavorites(index)}
                        >
                          <img src="/delete.svg" alt="" className="w-4 h-4" />{" "}
                          Remove
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left">
                          <img src="/share.svg" alt="" className="w-4 h-4" />{" "}
                          Share
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left">
                          <img src="/download.svg" alt="" className="w-4 h-4" />{" "}
                          Download
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <NextPage />
    </div>
  );
}
