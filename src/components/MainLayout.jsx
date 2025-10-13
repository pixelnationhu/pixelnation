import React from "react";
import { Outlet } from "react-router-dom";
import StickySidebar from "./StickySidebar";
import RightSidebar from "./RightSideBar";

export default function MainLayout() {
  return (
    <div className="relative z-10 flex min-h-screen bg-bg text-text transition-colors duration-500">
      <StickySidebar />

      <main className="flex-1 md:ml-28 ml-0 px-4 sm:px-6 bg-bg transition-all duration-500 pt-[70px] md:pt-0">
        <div className="max-w-screen-xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
