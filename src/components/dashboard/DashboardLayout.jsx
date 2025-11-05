"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen gap-2">
      {/* Fixed Sidebar */}
      <div className="h-screen min-w-44 w-48 bg-white shadow-lg border-2 border-gray-200 z-20 rounded-2xl">
        <Sidebar />
      </div>

      {/* Main Area beside Sidebar */}
      <div className="flex gap-2 flex-col flex-1 ml-64 h-screen">
        {/* Sticky Header */}
        <div className=" top-0 z-10 bg-white  border-2 border-gray-200 rounded-2xl">
          <Header />
        </div>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 mt-2 bg-white shadow border-2 border-gray-200 rounded-2xl ">
          {children}
        </main>
      </div>
    </div>
  );
}
