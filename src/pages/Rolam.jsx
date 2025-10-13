import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

export default function Rolam() {
  return (
    <div className="bg-background text-surface overflow-hidden w-full">
      {/* ===== HERO 1 – Rövid bemutatkozás ===== */}
      <section className="py-16 md:py-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-4xl bg-card rounded-2xl shadow-lg p-6 sm:p-10 md:p-14 transition-all duration-300 hover:shadow-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-tan mb-8 sm:mb-10 text-primary text-center">
            Rólam
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 group">
            {/* KÉP */}
            <div className="flex-shrink-0 relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-md group">
              <img
                src="https://i.ibb.co/PGQtgb5x/GmIBCABf.jpg"
                alt="Elisa - PixelNation"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* SZÖVEG */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl font-medium text-primary mb-3">
                Szia, Elisa vagyok 👋
              </h2>

              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Én vagyok a{" "}
                <span className="font-tan text-primary">PixelNation</span>{" "}
                bohéman precíz webdesignere és front-end fejlesztője. Hiszek
                abban, hogy az érzés legalább annyira fontos, mint a
                funkcionalitás. Számomra a webdesign nem csak technikai munka,
                hanem vizuális történetmesélés.
              </p>

              <p className="italic text-primary mt-6 text-sm sm:text-base">
                „Nem csak weboldalakat építek, hanem érzéseket kódolok.”
              </p>
            </div>
          </div>

          {/* Készségek */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">
                💻 Fejlesztés
              </h3>
              <p className="text-muted text-sm sm:text-base">
                HTML / CSS / JavaScript / React / Tailwind / Node.js
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">
                🎨 Design & Eszközök
              </h3>
              <p className="text-muted text-sm sm:text-base">
                Adobe XD / Photoshop / Illustrator / Premier Pro
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">
                🌍 Nyelvek
              </h3>
              <p className="text-muted text-sm sm:text-base">
                Magyar – anyanyelvű
              </p>
              <p className="text-muted text-sm sm:text-base">
                Angol – társalgási (B2)
              </p>
              <p className="text-muted text-sm sm:text-base">
                Török – anyanyelvű (C1)
              </p>
            </div>
          </div>

          {/* Linkek és gombok */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a
              href="https://github.com/pixelnationhu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface border border-muted rounded-xl px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>

            <a
              href="https://www.instagram.com/pixelnation.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface border border-muted rounded-xl px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <FaInstagram className="text-lg" /> Instagram
            </a>

            <a
              href="https://www.behance.net/pixelnation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface border border-muted rounded-xl px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <FaBehance className="text-lg" /> Behance
            </a>

            <a
              href="https://www.linkedin.com/in/elisa-pixelnation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface border border-muted rounded-xl px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>

            <a
              href="/docs/Elisa_CV.pdf"
              download
              className="flex items-center gap-2 bg-primary text-white rounded-xl px-4 py-2 hover:bg-primary/80 transition-all duration-300 text-sm sm:text-base"
            >
              <HiDownload className="text-lg" /> Önéletrajz letöltése
            </a>
          </div>
        </div>
      </section>

      {/* ===== HERO 2 – Hosszú bemutatkozás ===== */}
      <section className="py-16 md:py-24 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl w-full bg-card rounded-2xl shadow-lg p-6 sm:p-10 md:p-14 backdrop-blur-sm mx-auto">
          {/* HEADER KÉP */}
          <div className="relative overflow-hidden rounded-md mb-6 h-40 sm:h-48 md:h-64 w-full group">
            <img
              src="https://i.pinimg.com/736x/30/e7/0e/30e70ea5ea19df26d15c225485efbf1e.jpg"
              alt="Header background"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl font-tan mb-8 text-primary text-center">
            A történetem
          </h2>

          <p className="text-muted leading-relaxed whitespace-pre-line text-sm sm:text-base">
            Szia, Elisa vagyok a <b>PixelNation</b> bohéman precíz webdesignere
            és front-end fejlesztője. <b>9 évesen</b> kezdtem az első
            „weboldalaimat”, fanoldalakat raktam össze a mindenkilapja.hu-n és
            eoldal.hu-n. Akkor még fogalmam sem volt a kódolásról, csak{" "}
            <b>Painttel</b> vágtam ki a képeket, és örültem, ha valami működött.
            {"\n\n"}Aztán jött a <b>G-Portál</b>, ahol elkezdtem kísérletezni:
            átírtam minden sort, hogy megértsem, mit csinál. Itt tanultam meg a{" "}
            <b>HTML</b> és <b>CSS</b> alapjait, teljesen önállóan,
            kíváncsiságból.
            {"\n\n"}Később a <b>WordPress</b> világa következett, ahol már
            saját CSS + HTML designokat integráltam az alap <b>PHP kódba</b>.
            Ekkor kezdtem megérteni, mit jelent igazán a{" "}
            <b>front-end fejlesztés</b>; amikor nem csak működik valami, hanem
            szépen is működik.
            {"\n\n"}2020-ban <b>Törökországban</b> részt vettem egy webdesigner
            és kódoló tanfolyamon a <b>Yildiz Teknik Egyetemen</b>, ahol a
            modern webes alapokat <b>(Flexbox, Grid)</b> mélyítettem el. Ezek
            azóta is az építőkockái annak, amit ma csinálok.
            {"\n\n"}Ma már a legmodernebb technológiákkal dolgozom:{" "}
            <b>React, Tailwind CSS, Node.js, HTML, CSS, JavaScript.</b> Mind
            kézzel kódolva, egyedi designnal.
            {"\n\n"}Minden weboldalam egy történet, amit az ügyfelemmel{" "}
            <b>közösen</b> írunk. Hiszek a barátságos, emberi kommunikációban,
            mert a legjobb projektek mindig akkor születnek, amikor nem csak
            munkát végzünk, hanem együtt alkotunk.
            {"\n\n"}A világban most minden <b>fekete-fehér</b>, minimalista és
            sablonos. Én viszont hiszem, hogy a <b>színek, textúrák, formák</b>{" "}
            és érzelmek adják meg egy weboldal lelkét. A PixelNation ezért
            jött létre: hogy újra érzés legyen ránézni egy weboldalra.
            {"\n\n"}Ma az a célom, hogy minden ügyfelemnek olyan webdesignt
            készítsek, amiben benne van a története, az energiája és a{" "}
            <b>személyisége</b>, mert ez az, ami igazán megkülönböztet.
            {"\n\n"}És közben persze: szeretek kódolni, alkotni, tanulni és
            fejlődni.
            {"\n\n"}Lágy. Természetes. Emberi. Ez vagyok én és ilyenek az
            oldalaim is.
          </p>
        </div>
      </section>
    </div>
  );
}
