import React from "react";
import StorageCard from "../StorageCard";
import StorageTwo from "../StorageTwo";
import RecentFiles from "../RecentFiles";

function MainContent() {
  const data = [
    {
      title: "Images",
      items: 120,
      used: 24,
      total: 100,
      width: "67%",
      img: "/jpg.png",
      bg: "bg-[#fad1bf7b]",
      bar: "bg-orange-500",
    },
    {
      title: "Documents",
      items: 80,
      used: 16,
      total: 100,
      width: "80%",
      img: "/file-video.png",
      bg: "bg-[#18d0f01b]",
      bar: "bg-[#37d1ec]",
    },
    {
      title: "Videos",
      items: 42,
      used: 20,
      total: 100,
      width: "85%",
      img: "/doc-02.png",
      bg: "bg-[#3ef5a91c]",
      bar: "bg-[#0cc499]",
    },
    {
      title: "Audio",
      items: 205,
      used: 24,
      total: 100,
      width: "80%",
      img: "/catalogue.png",
      bg: "bg-[#f4e58e5b]",
      bar: "bg-yellow-400",
    },
  ];

  const data2 = [
    {
      title: "image1",
      img: "/rectangle-1.png",
      name: "Google Testing.doc",
    },
    {
      title: "image2",
      img: "/rectangle-2.png",
      name: "Google Testing.doc",
    },
    {
      title: "image3",
      img: "/rectangle-3.png",
      name: "Google Testing.doc",
    },
    {
      title: "image4",
      img: "/rectangle-4.png",
      name: "Google Testing.doc",
    },
  ];
  return (
    <>
      <div>
        <h3 className="text-xl font-md pb-5">Overview</h3>

        <h2 className="text-lg font-bold pb-3">Overview Storage</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <StorageCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-lg font-bold pb-3">Overview Storage</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data2.map((item, index) => (
              <StorageTwo key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <RecentFiles />
    </>
  );
}

export default MainContent;
