import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Rolam from "./pages/Rolam";
import Freebies from "./pages/Freebies";
import Contact from "./pages/Contact";
import { useButtonSound } from "./hooks/useButtonSound";
import BrandColorGuide from "./components/BrandColorGuide.jsx";

import MainLayout from "./components/MainLayout";


// ⬇️ FONTOS: ezt importáld be
import { ThemeProvider } from "./context/ThemeContext.jsx";

export default function App() {
  useButtonSound();

  return (
    // ⬇️ Itt csomagold körbe a ThemeProvider-rel
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projektek" element={<Projects />} />
            <Route path="/projektek/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/rolam" element={<Rolam />} />
            <Route path="/freebies" element={<Freebies />} />
            <Route path="/kapcsolat" element={<Contact />} />
             {/* ⬇️ ÚJ brand color guide oldal */}
    <Route path="/brand-guide" element={<BrandColorGuide />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
