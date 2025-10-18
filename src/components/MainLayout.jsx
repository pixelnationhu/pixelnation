import React from "react";
import { Outlet } from "react-router-dom";
import StickySidebar from "./StickySidebar"; // új header (StickySidebar helyett)
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-bg text-text transition-colors duration-500">
      {/* === FELSŐ NAVIGÁCIÓ === */}
      <StickySidebar />

      {/* === FŐ TARTALOM === */}
      <main className="pt-[100px] px-4 sm:px-8 md:px-12 lg:px-20 transition-all duration-500">
        <div className="max-w-screen-xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
