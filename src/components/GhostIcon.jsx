// src/components/GhostIcon.jsx
import React from "react";

export default function GhostIcon() {
  return (
    <div className="relative w-20 h-16 flex items-center justify-center animate-float">

      {/* Szellem teste */}
      <div className="absolute inset-0 bg-white rounded-t-full rounded-b-md shadow-md"></div>

      {/* Arc */}
      <div className="absolute top-4 flex justify-between w-5">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>

      {/* Száj */}
      <div className="absolute top-7 w-4 h-1 rounded-full bg-black"></div>

      {/* Lábak alul */}
      <div className="absolute bottom-0 flex justify-between w-full px-1">
        <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
        <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
        <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
      </div>

      {/* Tincsek */}
      <div className="absolute -top-1 left-4 w-7 h-2 bg-yellow-200 rounded-full rotate-12"></div>
      <div className="absolute -top-1 right-4 w-7 h-2 bg-yellow-200 rounded-full -rotate-12"></div>

      {/* Árnyék alul */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-black/20 rounded-full blur-sm animate-pulse"></div>
    </div>
  );
}
