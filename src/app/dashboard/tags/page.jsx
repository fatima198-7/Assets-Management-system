import RecentFiles from "@/components/RecentFiles";
import React from "react";

function page() {
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
      <div>
        <h2 className="font-2xl text-2xl pb-3">Tags</h2>

        <div className="flex flex-wrap text-[12px] rounded p-3 gap-2">
          {items.map((item, index) => (
            <p key={index} className="bg-[#a3ddf053] p-2 rounded w-fit">
              {item}
            </p>
          ))}
        </div>
      </div>
      <RecentFiles />
    </>
  );
}

export default page;
