// src/components/StickySidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Főoldal", path: "/", img: "https://placehold.co/80x80/a2cbcd/fff?text=F" },
  { name: "Projektek", path: "/projektek", img: "https://placehold.co/80x80/96adb5/fff?text=P" },
  { name: "Blog", path: "/blog", img: "https://placehold.co/80x80/afc4c9/fff?text=B" },
  { name: "Rólam", path: "/rolam", img: "https://placehold.co/80x80/e4e4e4/333?text=R" },
  { name: "Freebies", path: "/freebies", img: "https://placehold.co/80x80/f7f7f7/333?text=F" },
  { name: "Kapcsolat", path: "/kapcsolat", img: "https://placehold.co/80x80/d7090d/fff?text=K" },
];

export default function StickySidebar() {
  const location = useLocation();
  const activeIndex = menuItems.findIndex((item) =>
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  );

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-28 bg-[#A2CBCD] flex flex-col items-center py-6 gap-4 z-40 shadow-md overflow-hidden"
      aria-label="Oldal menü"
    >
      {/* site name / logo */}
      <Link to="/" className="mb-2 text-center">
        <div className="text-sm font-semibold tracking-tight">pixelnation.hu</div>
        <div className="text-xs text-[#5A4028]/60 -mt-0.5">Creative Webdesigner</div>
      </Link>

      <nav className="mt-4 flex flex-col items-center gap-4 relative" aria-label="Főmenü">
        {/* 🫧 Lágyan mozgó “harapás” kör */}
        <motion.div
          className="absolute left-[-15px] w-40 h-20 rounded-full z-0"
          style={{
            backgroundColor: "#FAF7F2",
          }}
          animate={{
            top: activeIndex * 84 - 7, // pozíció kiszámolása
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 200, // alacsonyabb = lágyabb mozgás
            damping: 10,
            mass: 1.2,
          }}
        />

        {/* menüpontok */}
        {menuItems.map((item, index) => {
          const active = index === activeIndex;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative w-full flex flex-col items-center group z-10"
              aria-current={active ? "page" : undefined}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-12 h-12 rounded-full border-2 transition-transform duration-200 ${
                  active
                    ? "scale-105 border-[#fff] shadow-[0_0_10px_#96ADB5]"
                    : "border-transparent group-hover:scale-105"
                }`}
              />

              <span
                className={`mt-2 text-xs transition-colors duration-200 ${
                  active ? "text-[#d7090d] font-semibold" : "text-[#3b2a20]/80"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* alsó infó */}
      <div className="mt-auto mb-4 text-[10px] text-[#5A4028]/60 px-2 text-center">
        © {new Date().getFullYear()} pixelnation.hu
      </div>
    </aside>
  );
}
