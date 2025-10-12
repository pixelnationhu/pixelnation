// src/components/RightSidebar.jsx
import React from "react";

export default function RightSidebar() {
  const cards = [
    {
      title: "Napi inspiráció",
      text: "„A design nem az, amit látsz, hanem az, amit érzel, mikor használod.” — Steve Jobs",
      img: "https://i.pinimg.com/originals/55/e8/af/55e8af23ff4e1055efd3605624dceb66.gif",
    },
    {
      title: "Kedvenc idézet",
      text: "„A kreativitás az intelligencia szórakozása.” — Albert Einstein",
      img: "https://i.pinimg.com/originals/93/08/1e/93081e266f7f0b20778d2736978b2e84.gif",
    },
    {
      title: "Rólam röviden",
      text: "PixelNation — egy bohém webdesigner, aki hisz abban, hogy az egyszerűség a legjobb UX.",
      img: "https://i.pinimg.com/originals/7d/07/a2/7d07a255678962d30d8717dcf5dbd266.gif",
    },
    {
      title: "Kedvenc gif",
      text: "Valami kedvenc gif leírás ide jöhet.",
      img: "https://i.pinimg.com/originals/12/79/a8/1279a87eec20974351a918d2f2ff95b1.gif",
    },
  ];

  return (
    <aside className="space-y-6 text-justify font-semiBold text-[16px] transition-colors duration-500">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-lightBg dark:bg-darkBg rounded-2xl p-4 shadow-lg leading-relaxed transition-colors duration-500 shadow-accent/40"
        >
          <div className="clearfix">
            <img
              src={c.img}
              alt={c.title}
              className="transition-transform duration-300 transform hover:scale-105 shadow-md float-left mr-2 mb-2 w-14 h-14 rounded-md object-cover"
            />
            <h3 className="text-primary dark:text-accent font-semibold mb-1">
              {c.title}
            </h3>
            <p className="text-secondary/80 dark:text-offWhite/80 text-sm">
              {c.text}
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
}
