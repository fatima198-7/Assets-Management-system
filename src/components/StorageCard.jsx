"use client";
import React from "react";

export default function StorageCard({
  title,
  items,
  used,
  total,
  width,
  img,
  bg,
  bar,
}) {
  return (
    <div className={`box ${bg} p-4 rounded-lg shadow flex flex-col gap-3`}>
      <div className="imgBox flex items-center gap-3 w-full">
        <img
          src={img}
          alt={title}
          className={`w-10 h-10 ${bar} p-2.5 rounded-[7px]`}
        />
        <div>
          <p className="font-medium text-gray-700">{title}</p>
          <p className="text-sm text-gray-500">{items} items</p>
        </div>
      </div>

      <div className={`w-full rounded-full h-2 ${bg}`}>
        <div
          className={`${bar} h-2 rounded-full transition-all`}
          style={{ width: width }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-1">
        {used} GB of {total} GB
      </p>
    </div>
  );
}
