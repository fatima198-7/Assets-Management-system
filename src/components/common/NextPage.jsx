"use client";
import React, { useState } from "react";

function NextPage({ totalPages = 10 }) {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const getPages = () => {
    const pages = [];

    // Agar total pages 5 se kam hain, sab dikhayein
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // hamesha 1
      pages.push(1);

      // Agar current page > 3, "..." dikhayein
      if (page > 3) pages.push("...");

      // current ke aas paas ka range
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      // Agar current page < totalPages - 2, "..." dikhayein
      if (page < totalPages - 2) pages.push("...");

      // last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="absolute bottom-0 right-0 w-full bg-white flex justify-end gap-2 py-2 z-50">
      <button
        onClick={prevPage}
        className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
      >
        Prev
      </button>

      {getPages().map((p, index) => (
        <button
          key={index}
          onClick={() => typeof p === "number" && setPage(p)}
          className={`border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 ${
            page === p ? "bg-blue-500 text-white" : ""
          }`}
          disabled={p === "..."}
        >
          {p}
        </button>
      ))}

      <button
        onClick={nextPage}
        className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}

export default NextPage;
