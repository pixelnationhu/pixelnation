import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "../App.css";

const menuItems = [
  { name: "Főoldal", path: "/", img: "/icons/menu.png" },
  { name: "Projektek", path: "/projektek", img: "/icons/menu.png" },
  { name: "Blog", path: "/blog", img: "/icons/blog.png" },
  { name: "Rólam", path: "/rolam", img: "/icons/menu.png" },
  { name: "Freebies", path: "/freebies", img: "/icons/freebies.png" },
  { name: "Kapcsolat", path: "/kapcsolat", img: "/icons/menu.png" },
];

export default function StickySidebar() {
  const location = useLocation();
  const navRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (navRef.current) {
      const firstItem = navRef.current.querySelector("a");
      if (firstItem) setItemHeight(firstItem.offsetHeight + 16);
    }
  }, []);

  const activeIndex = menuItems.findIndex((item) =>
    item.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.path)
  );

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-28 bg-surface flex flex-col items-center py-6 gap-4 z-40 shadow-md overflow-hidden transition-colors duration-500"
      aria-label="Oldal menü"
    >
      <Link to="/" className="mb-2 text-center">
        <div className="text-sm font-semibold tracking-tight text-primary">
          pixelnation.hu
        </div>
        <div className="text-xs text-muted -mt-0.5">
          Creative Webdesigner
        </div>
      </Link>

      <nav
        ref={navRef}
        className="mt-4 flex flex-col items-center gap-4 relative"
        aria-label="Főmenü"
      >
        <motion.div
          className="absolute left-[-15px] w-40 h-20 rounded-full z-0"
          style={{
            backgroundColor: darkMode
              ? "var(--color-bg)"
              : "var(--color-bg)",
          }}
          animate={{
            top: activeIndex * itemHeight,
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 1.2,
          }}
        />

        {menuItems.map((item, index) => {
          const active = index === activeIndex;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative w-full flex flex-col items-center justify-center group z-10"
              aria-current={active ? "page" : undefined}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-12 h-12 transform hover:scale-110 rounded-full border-2 transition-transform duration-300 ghost-float ${
                  active
                    ? "scale-105 border-primary shadow-[0_0_10px_var(--color-accent)]"
                    : "border-transparent group-hover:scale-105"
                }`}
              />
              <span
                className={`mt-2 text-xs transition-colors duration-200 ${
                  active ? "text-primary font-semibold" : "text-muted"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={toggleTheme}
        className="mt-auto mb-3 flex items-center justify-center p-3 rounded-full bg-surface transition-all duration-500 hover:scale-110 shadow-md"
        aria-label="Váltás világos / sötét mód között"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.728 0l.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </motion.div>
      </button>

      <div className="mb-4 text-[10px] text-muted px-2 text-center">
        © {new Date().getFullYear()} pixelnation.hu
      </div>
    </aside>
  );
}
