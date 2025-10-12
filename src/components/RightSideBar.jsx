// src/components/RightSidebar.jsx
import React from "react";

export default function RightSidebar() {
  const cards = [
    {
      title: "Rólam röviden",
      text: "Szia, Elisa vagyok. Én vagyok <strong>PixelNation</strong> bohéman precíz webdesignere, aki hisz abban, hogy az érzés legalább annyira fontos, mint a funkcionalitás. Egy weboldal számomra nem csak technikai projekt, hanem vizuális történetmesélés. A célom, hogy a design meleg, őszinte és személyes legyen, ahogy az emberi kapcsolatok is. A <strong>bohémság</strong> nálam nem rendetlenség, hanem szabadság. Nem ragaszkodom a sablonokhoz, mert minden márkának megvan a saját vizuális hangja. A stílusom három szóban: lágy, természetes, emberi. Szeretem, ha egy weboldal lélegzik, ha van benne ritmus, tér, és csend.",
      img: "https://i.ibb.co/PGQtgb5x/GmIBCABf.jpg",
    },
    {
      title: "Hogyan dolgozom?",
      text: "Együtt gondolkodom az ügyfeleimmel, nemcsak megvalósítok, hanem értelmezem az álmaikat. A folyamatom: <br /><b>1.</b> Megismerem a márkát és a hangulatát <br /><b>2.</b> Megtervezem a történetet, amit vizuálisan mesélünk el <br /><b>3.</b> Finomhangolom, amíg minden pixel a helyére nem kerül ",
      img: "https://i.pinimg.com/originals/27/14/29/271429a1b1cb41ff1403ed57bd9b1a7d.gif",
    },
    {
      title: "Miért érdemes velem dolgozni?",
      text: "Az én ügyfeleim nemcsak weboldalt kapnak, hanem érzést, amitől büszkék lehetnek. Együtt olyan arculatot építünk, ami természetes, őszinte és önazonos. Nem az a cél, hogy több legyél, hanem hogy a leginkább te legyél. ",
      img: "https://i.pinimg.com/originals/87/df/6d/87df6d60f4cc3c07968ae2127bddcc30.gif",
    },
    {
      title: "Kedvenceim",
      text: "☕ Kávé + lofi + kód; a tökéletes flow kombináció. <br> 🌷 Leginspirálóbb hely: tavaszi kert rózsaszín ég alatt. <br> 💭 Kedvenc idézet: <i>„A kreativitás az intelligencia szórakozása.” — Einstein</i>",
      
      img: "https://i.pinimg.com/originals/12/79/a8/1279a87eec20974351a918d2f2ff95b1.gif",
    },
  ];

  return (
    <aside className="space-y-6 text-justify font-semiBold text-[16px] transition-colors duration-500">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-surface shadow-lg dark:bg-darkBg rounded-2xl p-4 shadow-lg leading-relaxed transition-colors duration-500 shadow-accent/40"
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

            {/* 🔥 ITT A LÉNYEG: a sima {c.text} helyett */}
            <p
              className="text-secondary/80 dark:text-offWhite/80 text-sm"
              dangerouslySetInnerHTML={{ __html: c.text }}
            />
          </div>
        </div>
      ))}
    </aside>
  );
}
