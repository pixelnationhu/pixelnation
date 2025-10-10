import React from "react";
import { Outlet } from "react-router-dom";
import StickySidebar from "./StickySidebar";
import RightSidebar from "./RightSideBar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      {/* Bal oldali menü */}
      <StickySidebar />

      {/* Tartalom + jobb oldali sidebar */}
      <main className="flex-1 ml-28 p-6 lg:pr-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        {/* Ide kerül az aktuális oldal */}
        <div>
          <Outlet />
        </div>

        {/* Jobb oldali sáv */}
        <aside className="hidden lg:block">
          <RightSidebar />
        </aside>
      </main>
    </div>
  );
}
