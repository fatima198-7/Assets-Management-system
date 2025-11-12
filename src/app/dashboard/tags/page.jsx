import Card from "@/components/common/Card";
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
  const isEmpty = items.length === 0;
  return (
    <>
      {" "}
      <div>
        {" "}
        <Card title="Tags" />{" "}
        {isEmpty ? (
          <div>
            {" "}
            <img src="/153.png" alt="tag" />{" "}
          </div>
        ) : (
          <>
            {" "}
            <div className="flex flex-wrap text-[12px] rounded p-3 gap-2">
              {" "}
              {items.map((item, index) => (
                <p key={index} className="bg-[#a3ddf053] p-2 rounded w-fit">
                  {" "}
                  {item}{" "}
                </p>
              ))}{" "}
            </div>{" "}
          </>
        )}{" "}
      </div>{" "}
      <RecentFiles />{" "}
    </>
  );
}
export default page;
