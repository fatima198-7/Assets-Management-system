import Card from "@/components/common/Card";
import NextPage from "@/components/common/NextPage";
import RecentFiles from "@/components/RecentFiles";
import React from "react";

function Documents() {
  return (
    <div className="relative">
      <div className="pb-9">
        <Card title="Documents" />
        <RecentFiles iconColor="text-gray-300" enableCopyModal={true} />
      </div>
      <NextPage />
    </div>
  );
}

export default Documents;
