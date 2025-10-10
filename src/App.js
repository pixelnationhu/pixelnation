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

import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Minden oldal a MainLayout-ban jelenik meg */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projektek" element={<Projects />} />
          <Route path="/projektek/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/rolam" element={<Rolam />} />
          <Route path="/freebies" element={<Freebies />} />
          <Route path="/kapcsolat" element={<Contact />} />
        </Route>

        {/* Hibás URL → vissza főoldalra */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
