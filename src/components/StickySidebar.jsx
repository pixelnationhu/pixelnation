import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
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
import "../App.css";

const menuItems = [
  { name: "Főoldal", path: "/", icon: Home },
  { name: "Projektek", path: "/projektek", icon: FolderKanban },
  { name: "Blog", path: "/blog", icon: PenTool },
  { name: "Rólam", path: "/rolam", icon: User },
  { name: "Freebies", path: "/freebies", icon: Gift },
  { name: "Kapcsolat", path: "/kapcsolat", icon: Mail },
];

export default function Header() {
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dark / light mód váltás
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // scroll árnyék
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const activeIndex = menuItems.findIndex((item) =>
    item.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.path)
  );

  return (
    <>
      {/* === HEADER === */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-500 ${
          scrolled
            ? "bg-surface/95 shadow-md"
            : "bg-bg/80 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* --- Logo --- */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/236W5k22/pixelnationlogo.png"
              alt="pixelnation logo"
              className="w-[130px] h-auto dark:hidden"
            />
            <img
              src="https://i.ibb.co/cKpCnFXG/pixelnationlogo-dark.png"
              alt="pixelnation logo dark"
              className="w-[130px] h-auto hidden dark:block"
            />
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => {
              const active = i === activeIndex;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* --- Right side buttons --- */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface/50 transition-all"
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

            {/* --- Mobil menü ikon --- */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-primary focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-[72px] left-0 w-full bg-surface border-t border-accent/20 flex flex-col items-center gap-5 py-6 shadow-xl z-40 md:hidden"
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
            className="mt-4 flex items-center justify-center gap-2 text-sm text-primary"
          >
            {darkMode ? "🌙 Sötét mód" : "☀️ Világos mód"}
          </button>
        </motion.div>
      )}
    </>
  );
}
