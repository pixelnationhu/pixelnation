// src/components/RightSidebar.jsx
import React from "react";

export default function RightSidebar() {
  const cards = [
    {
      title: "Napi inspiráció",
      text: "„A design nem az,lNation — egy bohémlNation — egy bohém webdesigner  webdesigner amit látsz, hanem az, amit érzel, mikor használod.” — Steve Jobs",
      img: "https://placehold.co/60x60/f7d9d9/333?text=💡",
    },
    {
      title: "Kedvenc idézet",
      text: "„A kreativitás az intelligencia gn nem az, amit látsz, hanem az, amit érzel,gn nem az, amit látsz, hanem az, amit érzel, gn nem az, amit látsz, hanem az, amit érzel, szórakozása.” — Albert Einstein",
      img: "https://placehold.co/60x60/d9f7df/333?text=✨",
    },
    {
      title: "Rólam röviden",
      text: "PixelNation — egy bohém webdesigner, aki hisz abban, PixelNation — egy bohém webdesigner, aki hisz abban, hogy az egyszerűség a legjobb UX. PixelNation — egy bohém webdesigner, aki hisz abban, hogy az egyszerűség a legjobb UX. hogy az egyszerűség a legjobb UX.",
      img: "https://placehold.co/60x60/a2cbcd/fff?text=👩‍🎨",
    },
    {
      title: "Kedvenc gif",
      text: "Valami kedvenc gif leírás ide jöhet. Valami kedvenc gif leírás ide jöhet. Valami kedvenc gif leírás PixelNation — egy bohém webdesigner, aki hisz abban, hogy az egyszerűség a legjobb UX. ide jöhet.",
      img: "https://placehold.co/60x60/ffe9c7/333?text=🎬",
    },
    {
      title: "Kedvenc gif",
      text: "Valami kedvenc gif leírás ide jöhet. Valami kedvenc gif leírás ide jöhet. Valami kedvenc gif leírás PixelNation — egy bohém webdesigner, aki hisz abban, hogy az egyszerűség a legjobb UX. ide jöhet.",
      img: "https://placehold.co/60x60/ffe9c7/333?text=🎬",
    },
  ];

  return (
    <aside className="space-y-6 text-justify font-semiBold text-[16px]">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-white rounded-2xl p-4 shadow leading-relaxed"
        >
          <div className="clearfix">
            <img
              src={c.img}
              alt={c.title}
              className="float-left mr-2 mb-2 w-14 h-14 rounded-md object-cover"
            />
            <h3 className="text-brandRed font-semibold mb-1">{c.title}</h3>
            <p className="text-[#5A4028]/80 text-sm">{c.text}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
