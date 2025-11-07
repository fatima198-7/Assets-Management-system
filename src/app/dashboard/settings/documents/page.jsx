import RecentFiles from "@/components/RecentFiles";
import React from "react";

function Documents() {
  return (
    <div>
      <RecentFiles iconColor="text-gray-300" enableCopyModal={true} />
    </div>
  );
}

export default Documents;
