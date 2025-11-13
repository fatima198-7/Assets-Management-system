import React from "react";

function NextPage() {
  return (
    <div className="absolute  bg-white bottom-0 right-0 w-full  flex justify-end gap-3  py-1 z-50">
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100 bg-white">
        Prev
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        1
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        2
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        3
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        ...
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        10
      </div>
      <div className="border border-gray-300 px-3 py-1 text-[12px] rounded cursor-pointer hover:bg-gray-100">
        Next
      </div>
    </div>
  );
}

export default NextPage;
