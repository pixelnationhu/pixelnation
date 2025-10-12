import React from "react";
import { Outlet } from "react-router-dom";
import StickySidebar from "./StickySidebar";
import RightSidebar from "./RightSideBar";

export default function MainLayout() {
  return (
    <div className="relative z-10 flex min-h-screen bg-bg text-text transition-colors duration-500">
      <StickySidebar />

      <main className="flex-1 ml-28 p-6 bg-bg lg:pr-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 transition-colors duration-500">
        <div>
          <Outlet />
        </div>

        <aside className="hidden lg:block">
          <RightSidebar />
        </aside>
      </main>
    </div>
  );
}
