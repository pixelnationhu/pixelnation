// src/components/BrandColorGuide.jsx
import React from "react";

const colors = [
  {
    name: "Blush Pink",
    hex: "#d8a7b1",
    description: "Finom púderes rózsaszín — gombokhoz, kiemelésekhez.",
  },
  {
    name: "Dusty Lavender",
    hex: "#b88bb2",
    description: "Puha lila tónus, harmonizál a rózsaszínnel.",
  },
  {
    name: "Mauve Rose",
    hex: "#c38eb4",
    description: "Hover állapothoz, élénkebb, de még pasztell.",
  },
  {
    name: "Cream Beige",
    hex: "#f5f0ec",
    description: "Világos bézs háttér — meleg, semleges alap.",
  },
  {
    name: "Rose Mist",
    hex: "#f1d9e0",
    description: "Nagyon halvány rózsás tónus — hero szekcióhoz.",
  },
  {
    name: "Soft Lilac",
    hex: "#a2789d",
    description: "Finom fény dark módban, linkekhez és highlightokhoz.",
  },
  {
    name: "Smoky Violet",
    hex: "#4b3a4e",
    description: "Mély, púderes lila — dark hero háttérhez.",
  },
  {
    name: "Deep Plum",
    hex: "#2a2430",
    description: "Dark mód alapszín — elegáns, mély tónus.",
  },
];

export default function BrandColorGuide() {
  return (
    <div className="min-h-screen bg-[#f5f0ec] dark:bg-[#2a2430] py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#4b3a4e] dark:text-[#f1d9e0]">
        🎨 PixelNation Brand Color Guide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="bg-white/80 dark:bg-[#4b3a4e]/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all hover:scale-[1.02]"
          >
            <div
              className="h-28 w-full"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-[#4b3a4e] dark:text-[#f1d9e0] mb-1">
                {color.name}
              </h2>
              <p className="font-mono text-sm text-[#a2789d] dark:text-[#f5f0ec]/80 mb-2">
                {color.hex}
              </p>
              <p className="text-sm text-[#4b3a4e]/80 dark:text-[#f5f0ec]/70">
                {color.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-[#a2789d]/70 dark:text-[#f5f0ec]/50">
        © {new Date().getFullYear()} PixelNation – Soft Boho Aesthetic Palette
      </p>
    </div>
  );
}
