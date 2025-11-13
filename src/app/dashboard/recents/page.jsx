import Card from "@/components/common/Card";
import NextPage from "@/components/common/NextPage";
import RecentFiles from "@/components/RecentFiles";
import React from "react";

function page() {
  return (
    <div className="relative">
      <div className="pb-9">
        <Card title="Recent Files" />
        <RecentFiles enableCopyModal={false} />
      </div>

      <NextPage />
    </div>
  );
}

export default page;
