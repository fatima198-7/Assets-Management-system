import RecentFiles from "@/components/RecentFiles";
import React from "react";

function page() {
  return (
    <div>
      <RecentFiles enableCopyModal={false} />
    </div>
  );
}

export default page;
