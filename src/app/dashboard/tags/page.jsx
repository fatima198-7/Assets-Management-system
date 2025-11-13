"use client";
import Card from "@/components/common/Card";
import NextPage from "@/components/common/NextPage";
import RecentFiles from "@/components/RecentFiles";
import React, { useState } from "react";

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    "O'cyber",
    "Google Documents",
    "Beloz Testing",
    "Beloz Testing",
    "O'cyber",
    "Google Documents",
    "Beloz Testing",
    "Beloz Testing",
  ];

  return (
    <>
      <div className=" flex justify-between pt-3">
        <Card title="Tags" />
        <button
          className="px-3 py-2 text-white rounded bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          Click me
        </button>
      </div>

      {isOpen ? (
        <div className="flex flex-col items-center justify-center">
          <img src="/153.png" alt="tags" />
          <p className="text-xl font-semibold text-center">
            No Tagged Files Found
          </p>
          <p className="text-center text-[12px] text-gray-400 ">
            Your Tagged files collection is currently empty.
          </p>
          <p className="text-center text-[12px] text-gray-400 ">
            Start organizing your documents by adding tags to easily find them
            later.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap text-[12px] rounded p-3 gap-2">
            {items.map((item, index) => (
              <p key={index} className="bg-[#a3ddf053] p-2 rounded w-fit">
                {item}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="pb-9">
              <RecentFiles />
            </div>
            <NextPage />
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
