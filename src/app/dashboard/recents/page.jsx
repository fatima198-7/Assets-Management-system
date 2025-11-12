import Card from "@/components/common/Card";
import RecentFiles from "@/components/RecentFiles";
import React from "react";

function page() {
  return (
    <div>
      <Card title="Recent Files" />
      <RecentFiles enableCopyModal={false} />
    </div>
  );
}

export default page;
