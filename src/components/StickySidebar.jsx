import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "../App.css";
import {
  Home,
  FolderKanban,
  PenTool,
  User,
  Gift,
  Mail,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Főoldal", path: "/", icon: Home },
  { name: "Projektek", path: "/projektek", icon: FolderKanban },
  { name: "Blog", path: "/blog", icon: PenTool },
  { name: "Rólam", path: "/rolam", icon: User },
  { name: "Freebies", path: "/freebies", icon: Gift },
  { name: "Kapcsolat", path: "/kapcsolat", icon: Mail },
];

export default function StickySidebar() {
  const location = useLocation();
  const navRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // <- új: mobil menü állapota

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
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* --- DESKTOP --- */}
      <aside
        className="hidden md:flex fixed top-0 left-0 h-screen w-28 bg-surface flex-col items-center py-6 gap-4 z-40 shadow-md overflow-hidden transition-colors duration-500"
        aria-label="Oldal menü"
      >
        <Link to="pixelnation.hu" className="mb-2 text-center">
          <img
            src="https://i.ibb.co/236W5k22/pixelnationlogo.png"
            alt="pixelnation logo"
            className="mx-auto w-32 h-auto block dark:hidden"
          />
          <img
            src="https://i.ibb.co/cKpCnFXG/pixelnationlogo-dark.png"
            alt="pixelnation logo dark"
            className="mx-auto w-32 h-auto hidden dark:block"
          />
        </Link>

        <nav
          ref={navRef}
          className="mt-4 flex flex-col items-center gap-4 relative"
          aria-label="Főmenü"
        >
          <motion.div className="absolute left-[-9999px]" animate={{ opacity: 0 }} />
          {menuItems.map((item, index) => {
            const active = index === activeIndex;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative w-full flex flex-col items-center justify-center group z-10"
                aria-current={active ? "page" : undefined}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-[0px] transition-all duration-300 ${
                    active
                      ? "scale-105 border-primary shadow-md shadow-neutral-300 dark:shadow-neutral-800"
                      : "border-transparent group-hover:scale-105 group-hover:shadow-sm group-hover:shadow-neutral-300"
                  }`}
                >
                  <Icon
                    size={26}
                    className={`transition-colors duration-200 ${
                      active ? "text-primary" : "text-muted group-hover:text-primary"
                    }`}
                  />
                </div>

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

      {/* --- MOBIL --- */}
      <div className="bg-bg md:hidden fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/236W5k22/pixelnationlogo.png"
            alt="pixelnation logo"
            className="w-[120px] h-auto dark:hidden"
          />
          <img
            src="https://i.ibb.co/cKpCnFXG/pixelnationlogo-dark.png"
            alt="pixelnation logo dark"
            className="w-[120px] h-auto hidden dark:block"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-primary focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed top-[64px] left-0 w-full bg-surface flex flex-col items-center gap-4 py-6 shadow-lg z-40"
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 text-base ${
                  active ? "text-primary font-semibold" : "text-muted"
                }`}
              >
                <Icon size={22} />
                {item.name}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="mt-2 flex items-center justify-center gap-2 text-sm text-primary"
          >
            {darkMode ? "🌙 Sötét mód" : "☀️ Világos mód"}
          </button>
        </motion.div>
      )}
    </>
  );
}
