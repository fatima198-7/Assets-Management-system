"use client";
import { useEffect, useState } from "react";
import { FileText, Trash } from "lucide-react";
import Card from "@/components/common/Card";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);

  // Light Gray Icons
  const iconColor = "text-gray-300";

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

  return (
    <div className="p-6 min-h-[99vh] h-full overflow-y-hidden">
      <Card title="Favorites" />

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-gray-500">
          <img src="/153.png" alt="empty" className="w-[200px]" />
          <h2 className="text-center text-2xl text-black">
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

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-500" />
                      {item.name}
                    </div>
                  </td>

                  <td className="p-3 text-gray-600">{item.lastModified}</td>

                  <td className="p-3 max-w-[200px] truncate text-blue-600 underline cursor-pointer">
                    {item.link}
                  </td>

                  <td className="p-3 text-gray-600">{item.filesize}</td>

                  <td className="p-3 text-right relative w-48">
                    {/* Hover Icons */}
                    <div className="hidden group-hover:flex items-center gap-3 absolute -left-5 top-1/2 -translate-y-1/2 px-2 py-1 z-30">
                      <img
                        src="/share.svg"
                        alt="share"
                        className={`text-gray-400 cursor-pointer`}
                      />
                      <img
                        src="/edit.svg"
                        alt="edit"
                        className={`text-gray-400  ${iconColor}`}
                      />
                      <img
                        src="/download.svg"
                        alt="download"
                        className={`text-gray-400 `}
                      />
                      <img
                        src="/star-off.svg"
                        alt="favorite"
                        className={`${iconColor} cursor-pointer`}
                        onClick={() => removeFromFavorites(index)}
                      />
                      <img
                        src="/delete.svg"
                        alt="delete"
                        className={`text-gray-400 `}
                      />
                      <img
                        src="/block.svg"
                        alt="block"
                        className={`text-gray-400 `}
                      />
                    </div>

                    <button
                      className="px-2 py-1 hover:bg-gray-200 rounded transition"
                      onClick={() =>
                        setMenuIndex(menuIndex === index ? null : index)
                      }
                    >
                      ⋮
                    </button>

                    {menuIndex === index && (
                      <div className="absolute right-0 top-8 bg-white shadow-md rounded-md py-1 w-32 z-50">
                        <button
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100  w-full"
                          onClick={() => removeFromFavorites(index)}
                        >
                          <img src="/delete.svg" alt="" /> Remove
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
    </div>
  );
}
