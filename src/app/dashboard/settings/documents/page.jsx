import RecentFiles from "@/components/RecentFiles";
import React from "react";

function Documents() {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3 flex items-center gap-2">
        Documents Link
      </h1>

      <RecentFiles iconColor="text-gray-300" enableCopyModal={true} />
    </div>
  );
}

export default Documents;
