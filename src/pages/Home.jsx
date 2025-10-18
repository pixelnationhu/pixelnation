import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { client, urlFor } from "../lib/sanityClient";
import { projects } from "../data/projects";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "blog"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage,
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchData();
  }, []);

  const latestProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-bg text-text overflow-x-hidden w-full">
      <section className="space-y-24 py-10">

        {/* === HERO 1 — Bevezető === */}
        <div className="relative overflow-hidden bg-surface rounded-2xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          {/* Lebegő fényfoltok */}
          <motion.div
            className="absolute top-[-80px] left-[20%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[120px]"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-100px] right-[10%] w-[280px] h-[280px] rounded-full bg-secondary/10 blur-[140px]"
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Szöveg */}
          <div className="flex-1 text-left space-y-5 z-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serifFancy leading-tight">
              Szia, én <span className="text-primary">Elisa</span> vagyok —<br />
              <span className="text-secondary">webdesigner & fejlesztő</span>, aki életre kelti a márkádat.
            </h1>
            <p className="text-muted max-w-xl leading-relaxed">
              Egy személyben <b>grafikus, UI/UX designer</b> és <b>front-end fejlesztő</b>.  
              Hiszek abban, hogy a legjobb weboldalak nemcsak működnek, hanem <b>érzéseket keltenek</b>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/kapcsolat"
                className="px-6 py-3 rounded-lg bg-primary text-bg font-semibold text-lg shadow hover:bg-secondary transition duration-300"
              >
                Kérj ingyenes konzultációt →
              </Link>
              <Link
                to="/projektek"
                className="px-6 py-3 rounded-lg border border-muted bg-surface text-text hover:bg-accent/10 transition duration-300"
              >
                Nézd meg a munkáimat
              </Link>
            </div>
          </div>

          {/* Kép */}
          <div className="flex-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96">
              <img
                src="https://i.pinimg.com/736x/87/48/58/874858e978787583c5c5d34a459d08dc.jpg"
                alt="PixelNation kreatív webdesign"
                className="w-full h-full object-cover"
              />
            </div>

            {/* lebegő box */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-[var(--color-border)] rounded-xl shadow-lg p-4 w-[180px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm text-primary font-medium">
                „A design nem dísz, hanem élmény.”  
                <br />– Elisa, PixelNation
              </p>
            </motion.div>
          </div>
        </div>

        {/* === HERO 2 — Ki vagyok én + Szolgáltatások === */}
        <section className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Bal: Ki vagyok én */}
          <div className="relative bg-surface rounded-2xl shadow-lg p-8 md:p-12 flex flex-col justify-between">
            
            {/* Felső kép */}
            <div className="rounded-xl overflow-hidden h-48 mb-6 shadow-md">
              <img
                src="https://i.pinimg.com/736x/ab/1e/2c/ab1e2c02a88ba163b699edc014aaf0f4.jpg"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Középső tartalom */}
            <div>
              <h2 className="text-3xl font-tan text-primary mb-4">🌿 Ki vagyok én?</h2>
              <p className="text-muted leading-relaxed mb-8">
                Egy bohéman precíz alkotó, aki imádja, ha egy weboldalban egyszerre van <b>lélek és logika</b>.  
                Nem sablonokból dolgozom, hanem <b>kódból, nulláról, személyre szabva</b>.  
                Ha velem dolgozol, nemcsak egy weboldalt kapsz, hanem egy <b>vizuális történetet</b>, amit kódban mesélek el.
              </p>
            </div>

            {/* Alsó 3 kis marketing doboz */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "🔥 Egyediség", desc: "Minden projekt új, kézzel épített dizájn." },
                { title: "💬 Kommunikáció", desc: "Folyamatos kapcsolattartás fejlesztés közben." },
                { title: "🚀 Hatékonyság", desc: "Gyors, reszponzív, UX-orientált fejlesztés." },
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-bg/80 backdrop-blur-sm border border-[var(--color-border)] rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-sm text-primary mb-1">{b.title}</h4>
                  <p className="text-xs text-muted leading-snug">{b.desc}</p>
                </div>
              ))}
            </div>

           
          </div>

          {/* Jobb: Szolgáltatások */}
          <div className="bg-surface rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-tan text-primary mb-6">💼 Miben tudok segíteni?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "🌐 Weboldal készítés", desc: "Egyedi, kézzel írt React alapú oldalak, gyorsak, modern és letisztultak." },
                { title: "🎨 UI / UX design", desc: "Felhasználóbarát, vizuálisan kellemes felületek, ahol minden kattintás élmény." },
                { title: "✨ Arculattervezés", desc: "Logó, névjegy, brand stílus és minden, ami vizuálisan összeköti a márkád." },
                { title: "🧠 Tartalom & stratégia", desc: "Storytelling, kommunikációs irány, szövegírás, hogy az oldalad beszéljen." },
                { title: "🛠️ Karbantartás", desc: "1 hónap support minden átadott projekthez, frissítéssel és finomhangolással." },
                { title: "📱 Social & marketing", desc: "Kreatív TikTok / Instagram / Facebook együttműködések, kampányok és vizuális tartalomgyártás." },
              ].map((s, i) => (
                <div key={i} className="bg-bg rounded-xl p-5 shadow hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === HERO 3 — Hogyan dolgozom (6 dobozra bővítve) === */}
        <section className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-surface rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-tan text-primary mb-6">⚙️ Hogyan dolgozom?</h2>
            <p className="text-muted mb-8 leading-relaxed">
              Az együttműködés nálam nem sablonos folyamat.  
              <br />Minden projekt személyes és közös alkotás, lépésről lépésre.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "💬", title: "Konzultáció", desc: "Megismerem a céljaid és a márkád történetét." },
                { icon: "🧩", title: "Koncepció", desc: "Moodboard, UX-vázlatok és stílusirány kialakítása." },
                { icon: "💻", title: "Design & Fejlesztés", desc: "Egyedi, kézzel épített, reszponzív oldal kódolása & logó kialakítása." },
                { icon: "🔍", title: "Tesztelés", desc: "Minden eszközön és böngészőn átnézve." },
                { icon: "🚀", title: "Átadás & Support", desc: "1 hónap utógondozás, finomhangolás és tanácsadás." },
                { icon: "📊", title: "Eredmények elemzése", desc: "Kampányhatás, konverzió és UX visszajelzések értékelése." },
              ].map((s, i) => (
                <div key={i} className="bg-bg rounded-xl p-5 shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-muted text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full">
            <motion.div
              className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/d9/50/bc/d950bcba6d197b4ff621f76701953745.jpg')] bg-cover bg-center rounded-2xl shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-[var(--color-border)] rounded-xl shadow-lg p-5 w-[200px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-primary font-medium">
                „A részletek teszik igazzá a design-t.”  
              </p>
            </motion.div>
          </div>
        </section>

        {/* === HERO 4 — Projektek === */}
        <section className="rounded-2xl p-6 md:p-10 bg-surface shadow-lg text-center">
          <h2 className="text-2xl font-tan text-primary mb-4">🚀 Legutóbbi munkáim</h2>
          <p className="text-muted mb-8">Pár kedvenc projekt, amit a szívemmel és kóddal készítettem 💻</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProjects.map((p) => (
              <article
                key={p.id}
                className="bg-bg rounded-2xl p-4 shadow group hover:shadow-xl transition-all duration-500 ease-out"
              >
                <div className="relative overflow-hidden rounded-md mb-3 h-40 sm:h-48 w-full group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">{p.short}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <Link
                    to={`/projektek/${p.id}`}
                    className="px-3 py-1 rounded bg-primary text-surface hover:bg-accent transition duration-300 text-sm"
                  >
                    Megnézem
                  </Link>
                  <a
                    href={p.live || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded border border-muted text-sm text-text hover:bg-accent/10 transition-colors duration-300"
                  >
                    Live
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* === HERO 5 — Blog === */}
        <section className="rounded-2xl p-6 md:p-10 bg-surface shadow-lg text-center">
          <h2 className="text-2xl font-tan text-primary mb-4">📝 Legfrissebb blog bejegyzéseim</h2>
          <p className="text-muted mb-8">Tippek, inspiráció és kreatív gondolatok a kulisszák mögül ✨</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((p) => (
                <article
                  key={p._id}
                  className="bg-bg p-4 rounded-2xl shadow group hover:shadow-xl transition-all duration-500 ease-out"
                >
                  <div className="relative overflow-hidden rounded-md mb-3 h-40 sm:h-48 w-full">
                    <img
                      src={urlFor(p.mainImage).width(600).url()}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <h2 className="font-semibold mb-2">{p.title}</h2>
                  <p className="text-muted text-sm mt-1 leading-relaxed">{p.excerpt}</p>
                  <div className="mt-3">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="px-3 py-1 bg-primary text-surface hover:bg-accent transition duration-300 rounded text-sm inline-block"
                    >
                      Tovább olvasom →
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-sm text-muted">Nincsenek még bejegyzések 🌱</p>
            )}
          </div>
        </section>

        {/* === CTA === */}
        <section className="rounded-2xl p-10 bg-surface text-center shadow-xl">
          <h2 className="text-2xl font-tan mb-4 text-primary">Készen állsz, hogy együtt dolgozzunk?</h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Én már alig várom, hogy megismerjem a történetedet.  
            Indítsuk el a közös projektet — <b>az első lépés csak egy kattintás</b>.
          </p>
          <Link
            to="/kapcsolat"
            className="px-8 py-3 bg-primary text-surface rounded-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Kapcsolatfelvétel →
          </Link>
        </section>
      </section>
    </main>
  );
}
