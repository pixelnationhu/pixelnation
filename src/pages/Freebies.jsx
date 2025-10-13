import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaBook, FaPalette, FaFileImage } from "react-icons/fa6";

export default function Freebies() {
  return (
    <div className="bg-background text-surface overflow-hidden">
      {/* ===== HERO – Rövid bevezető (kép + szöveg) ===== */}
      <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
        {/* Kép */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out w-full max-w-[550px] md:max-w-[600px] lg:max-w-[650px] h-64 sm:h-72 md:h-80 lg:h-96">
            <img
              src="https://i.ibb.co/xSKhJm4V/Beige-Minimalist-Ebook-Mockup-Instagram-Post-1.png"
              alt="Freebies hero"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>

        {/* Szöveg */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-tan text-primary mb-6">
            Freebies
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Itt találod a <b>PixelNation</b> ingyenes letölthető anyagait —
            e-bookokat, sablonokat, mockupokat és inspirációs segédleteket,
            amik segítenek neked a webdesign és kreatív alkotás világában.
          </p>
        </div>
      </section>

      {/* ===== GRID – Letölthető anyagok ===== */}
      <section className="py-10 px-6 sm:px-10 lg:px-20 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* 1. E-book */}
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.03] duration-300">
          <FaBook className="text-primary text-4xl sm:text-5xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Webdesign alapok (E-book)
          </h3>
          <p className="text-muted text-sm sm:text-base mb-4">
            Egy ingyenes, rövid e-book, ami összefoglalja a modern webdesign
            alapelveit, színek, tipográfia és UX szemlélet mentén.
          </p>
          <a
            href="/freebies/webdesign-alapok.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/80 transition-all text-sm sm:text-base"
          >
            <HiDownload /> Letöltés
          </a>
        </div>

        {/* 2. Színpaletta pack */}
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.03] duration-300">
          <FaPalette className="text-primary text-4xl sm:text-5xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            10 kreatív színpaletta
          </h3>
          <p className="text-muted text-sm sm:text-base mb-4">
            Letölthető paletták modern webes és branding projektekhez, .ASE és
            .PNG formátumban.
          </p>
          <a
            href="/freebies/pixelnation-palettak.zip"
            download
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/80 transition-all text-sm sm:text-base"
          >
            <HiDownload /> Letöltés
          </a>
        </div>

        {/* 3. Mockup pack */}
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.03] duration-300">
          <FaFileImage className="text-primary text-4xl sm:text-5xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Web mockup sablonok
          </h3>
          <p className="text-muted text-sm sm:text-base mb-4">
            Használd ezeket az előre elkészített mockupokat, hogy könnyen
            prezentáld a webdesignjaidat ügyfeleknek vagy a portfóliódba.
          </p>
          <a
            href="/freebies/mockup-pack.zip"
            download
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/80 transition-all text-sm sm:text-base"
          >
            <HiDownload /> Letöltés
          </a>
        </div>
      </section>

      {/* ===== CTA – Inspirációs zárás ===== */}
      <section className="py-16 md:py-24 text-center bg-card mt-10 transition-opacity duration-700 px-6">
        <h2 className="text-2xl sm:text-3xl font-tan text-primary mb-4">
          Töltsd le, inspirálódj, alkoss szabadon 🎨
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A PixelNation célja, hogy támogassa a kreatív közösséget – legyen szó
          kezdőkről, alkotókról vagy fejlesztőkről. Ezek az anyagok teljesen
          ingyenesek, de annál értékesebbek.
        </p>
      </section>
    </div>
  );
}
