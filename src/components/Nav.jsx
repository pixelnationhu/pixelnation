import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="text-xl font-serifFancy text-brandRed">Pixelnation</div>
        <nav className="hidden md:flex gap-6 text-sm text-[#5A4028]">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projektek</Link>
          <Link to="/blog" className="hover:underline">Napló</Link>
          <Link to="/about" className="hover:underline">Rólam</Link>
          <Link to="/contact" className="ml-4 px-3 py-2 rounded-full bg-brandRed text-white">Hire</Link>
        </nav>
      </div>
    </header>
  );
}
