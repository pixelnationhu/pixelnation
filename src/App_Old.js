/*
Single-file React component: Elisa's Bohém Portfolio
- TailwindCSS expected for styling (recommended)
- Fonts: add Google Fonts in your index.html for best results
- Usage: place this file as App.jsx (or similar) in a CRA/Vite/Next app and render <ElisaPortfolio />

Features included:
- Hash-like internal routing (no external router required)
- Home, Projects, Project detail, Journal, About, Contact pages
- Project cards with GIFs/images, emojis, tags
- Asymmetric layout, textured background, subtle animations
- Accessible, responsive, copyable and customizable
*/

import React, { useState } from "react";
import { blogPosts } from "./data/blogPosts.js";

// Sample project data
const PROJECTS = [
  {
    id: "p1",
    title: "Hangulatlap — Lélek Collage",
    emoji: "🪶",
    year: 2025,
    tags: ["HTML", "CSS", "Collage"],
    short:
      "Egy interaktív hangulatlap-sorozat, amely a múlt emlékeit és jelen érzetét rétegezi.",
    image: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    long: "Kollázsok és rétegek: textúrák, kézírásos címkék és finom animációk. A cél: érezni, nem csak nézni. Kísérletek papír-textúrákkal és aszimmetrikus griddel.",
  },
  {
    id: "p2",
    title: "Lélek Terápia — Insta Cards",
    emoji: "🌸",
    year: 2024,
    tags: ["Social", "Design", "Psychology"],
    short:
      "Letisztult, bézs-barna Instagram sablonok a pszichológiai tartalmaidhoz.",
    image: "https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif",
    long: "Sorozat grid-művészetből: 3-as feed-ek, highlight-csomag, és könnyen használható Canva/PSD források. A cél a nyugalom és az érzelmi rezonancia.",
  },
  {
    id: "p3",
    title: "Narratív TikTok Sablonok",
    emoji: "🎞️",
    year: 2025,
    tags: ["Video", "Narration", "Aesthetics"],
    short:
      "Esztétikus narrációs videók sablonjai (szöveg overlay, kártya-hangulat).",
    image: "https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif",
    long: "Rövid videós sablonok narrációhoz: kézi tipográfia, slow crossfade, bézs paletta és arany fény effektek.",
  },
];

function useRoute() {
  // simple hash-based routing substitute
  const [route, setRoute] = useState(
    window.location.hash.replace(/^#/, "") || "home"
  );
  React.useEffect(() => {
    const onHash = () =>
      setRoute(window.location.hash.replace(/^#/, "") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = (to) => (window.location.hash = to);
  return { route, navigate };
}

export default function ElisaPortfolio() {
  const { route, navigate } = useRoute();
  const [selected, setSelected] = useState(null);

  // small helper for easing class toggles
  const active = (r) =>
    route === r
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-2 pointer-events-none";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,rgba(0,0,0,0.02)_0_1px,transparent_1px),radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.015)_0_1px,transparent_1px),linear-gradient(180deg,#F6F0E8,#FBF7F2)] text-[#5A4028] antialiased">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Nav navigate={navigate} />

        {/* main content container */}
        <main className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8">
          {/* primary column */}
          <section className="space-y-8">
            <div
              className={`transition-all duration-400 ${
                route === "home" ? "opacity-100 translate-y-0" : "opacity-60"
              }`}
            >
              <Hero
                onCTAClick={() => {
                  navigate("#projects");
                  window.location.hash = "projects";
                }}
              />
            </div>

            {/* Blog preview a főoldalon */}
            {route === "home" && (
              <section className="mt-10 p-6 rounded-2xl bg-white/70 shadow-sm">
                <h2 className="text-2xl font-serif mb-4">Napló ✍️</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="p-4 rounded-xl bg-[#F7F0E6] shadow-md border-l-4 border-[#E7B8B0]/30"
                    >
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-[#5A4028]/70">
                        {post.excerpt}
                      </p>
                      <button
                        onClick={() => navigate("journal")}
                        className="mt-3 text-sm font-medium text-[#C36A4A] hover:underline"
                      >
                        Tovább olvasom →
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => navigate("journal")}
                    className="px-5 py-2 rounded-lg bg-[#C36A4A] text-white font-semibold shadow-sm"
                  >
                    Összes bejegyzés megtekintése
                  </button>
                </div>
              </section>
            )}

            <div
              className={active("projects") + " transition-all duration-500"}
              aria-hidden={route !== "projects"}
            >
              {route === "projects" && (
                <ProjectsPage
                  projects={PROJECTS}
                  onOpen={(p) => {
                    setSelected(p);
                    navigate(`project-${p.id}`);
                  }}
                />
              )}
            </div>

            <div
              className={active("journal") + " transition-all duration-500"}
              aria-hidden={route !== "journal"}
            >
              {route === "journal" && <Journal />}
            </div>

            <div
              className={active("about") + " transition-all duration-500"}
              aria-hidden={route !== "about"}
            >
              {route === "about" && <About />}
            </div>

            <div
              className={active("contact") + " transition-all duration-500"}
              aria-hidden={route !== "contact"}
            >
              {route === "contact" && <Contact />}
            </div>

            {/* project detail route */}
            {route.startsWith("project-") && (
              <div className="bg-white/70 rounded-2xl p-6 shadow-md border-l-4 border-[#C36A4A]">
                <button
                  onClick={() => navigate("#projects")}
                  className="text-sm mb-4"
                >
                  ← Vissza a projektekhez
                </button>
                <ProjectDetail
                  id={route.replace("project-", "")}
                  projects={PROJECTS}
                />
              </div>
            )}
          </section>

          {/* side column */}
          <aside className="space-y-6">
            <ProfileCard />
            <SmallGallery
              projects={PROJECTS}
              onOpen={(p) => {
                setSelected(p);
                navigate(`project-${p.id}`);
              }}
            />
            <ContactCard />
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  );
}

/* ------- Components ------- */
function Nav({ navigate }) {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-serif tracking-tight">
          Elisa <span className="text-[#D9B66A]">•</span>
        </div>
        <div className="hidden md:flex gap-3 text-sm items-center text-[#5A4028]/90">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigate("home");
            }}
            className="hover:underline"
          >
            Főoldal
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              navigate("projects");
            }}
            className="hover:underline"
          >
            Projektek
          </a>
          <a
            href="#journal"
            onClick={(e) => {
              e.preventDefault();
              navigate("journal");
            }}
            className="hover:underline"
          >
            Napló
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              navigate("about");
            }}
            className="hover:underline"
          >
            Rólam
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigate("contact");
            }}
            className="hover:underline"
          >
            Kapcsolat
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          className="text-sm bg-[#E7B8B0] px-3 py-2 rounded-md shadow-sm text-white"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            navigate("contact");
          }}
        >
          Hire
        </a>
        <button
          className="md:hidden p-2 rounded-md bg-white/60"
          onClick={() => {
            window.location.hash = "projects";
          }}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

function Hero({ onCTAClick }) {
  return (
    <header className="relative rounded-2xl p-8 bg-gradient-to-b from-white/60 to-white/40 shadow-lg overflow-hidden">
      <div
        className="absolute right-[-60px] top-8 w-56 h-56 rounded-3xl mix-blend-multiply opacity-90 transform -rotate-12 blur-sm"
        style={{ background: "conic-gradient(#E7B8B0,#C36A4A,#D9B66A)" }}
        aria-hidden
      ></div>

      <div className="flex gap-6 items-start">
        <div className="w-40 h-40 rounded-xl bg-white/70 flex items-center justify-center text-3xl font-parisienne shadow-md">
          Elisa
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-serif">
            Bohém vizuális történetmesélő{" "}
            <span className="inline-block">🪶</span>
          </h1>
          <p className="mt-4 text-[#5A4028]/90 max-w-xl">
            Alkotás, teremtés és gyógyulás: vintage textúrák, aszimmetria, finom
            arany fénypontok — az élmény fontosabb, mint az eszköz.{" "}
            <span className="text-sm">Pécs • remote</span>
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onCTAClick}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#E7B8B0] to-[#C36A4A] text-white font-semibold shadow-sm"
            >
              Nézd meg a projekteket ✨
            </button>
            <a
              href="#journal"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "journal";
              }}
              className="px-4 py-2 rounded-lg border border-[#D9B66A]/30"
            >
              Naplóm
            </a>
          </div>

          <div className="mt-6 text-sm text-[#5A4028]/70">
            Kis dísz:{" "}
            <span className="px-2 rounded-full bg-[#D9B66A]/12">#bohem</span>{" "}
            <span className="px-2 rounded-full bg-[#E7B8B0]/12">#lélek</span>
          </div>
        </div>
      </div>

      {/* small collage at bottom-left */}
      <div className="absolute left-6 bottom-[-28px] flex gap-3" aria-hidden>
        <div className="w-28 h-28 rounded-lg bg-gradient-to-b from-[#E7B8B0]/80 to-transparent transform -rotate-6 shadow-sm"></div>
        <div className="w-20 h-32 rounded-lg bg-gradient-to-b from-[#C36A4A]/70 to-transparent transform rotate-6 shadow-sm"></div>
        <div className="w-16 h-16 rounded-lg bg-gradient-to-b from-[#9AA88F]/60 to-transparent transform -rotate-12 shadow-sm"></div>
      </div>
    </header>
  );
}

function ProjectsPage({ projects, onOpen }) {
  return (
    <section>
      <h2 className="text-2xl font-serif">Projektek ✨</h2>
      <p className="mt-2 text-sm text-[#5A4028]/80">
        Kis történetek, hangulatlapok és dizájn-sorozatok — néhány válogatás.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl bg-white/70 p-4 shadow-md border-l-4 border-[#D9B66A]/20 hover:scale-[1.01] transition-transform"
          >
            <div className="flex gap-4">
              <div className="w-28 h-28 rounded-md overflow-hidden flex-shrink-0 bg-[#F0E9E4]">
                <img
                  src={p.image}
                  alt="project gif"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {p.emoji} {p.title}
                </h3>
                <p className="text-sm mt-1 text-[#5A4028]/80">{p.short}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-[#D9B66A]/12 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => onOpen(p)}
                    className="text-sm px-3 py-1 rounded-md bg-[#E7B8B0] text-white"
                  >
                    Megnyitás
                  </button>
                  <a
                    className="text-sm px-3 py-1 rounded-md border"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail({ id, projects }) {
  const project = projects.find((p) => p.id === id) || projects[0];
  return (
    <div>
      <h2 className="text-2xl font-serif">
        {project.emoji} {project.title}
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={project.image}
            alt="project visual"
            className="w-full h-80 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-[#5A4028]/90">{project.long}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-[#E7B8B0]/12 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-xl p-4 bg-gradient-to-b from-white/70 to-white/40 shadow-md">
          <div className="text-sm">Év: {project.year}</div>
          <div className="mt-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block text-sm py-2"
            >
              Letöltések
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block text-sm py-2"
            >
              Megosztás
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "contact";
              }}
              className="block text-sm py-2"
            >
              Megrendelés / Együttműködés
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Journal() {
  const entries = [
    {
      id: 1,
      date: "2025-03-12",
      title: "Kis rituálé minden reggel",
      excerpt: "3 rövid szokás, ami segít hangulatot teremteni.",
    },
    {
      id: 2,
      date: "2025-02-01",
      title: "Rétegek és emlékek",
      excerpt: "A collázs, mint önismereti eszköz.",
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-serif">Napló ✍️</h2>
      <p className="mt-2 text-sm text-[#5A4028]/80">
        Gondolatok a teremtésről, a gyógyulásról és a mindennapi dizájnról.
      </p>
      <div className="mt-6 space-y-4">
        {entries.map((e) => (
          <article key={e.id} className="rounded-xl p-4 bg-white/70 shadow-sm">
            <div className="text-sm text-[#5A4028]/60">{e.date}</div>
            <h3 className="mt-1 font-semibold">{e.title}</h3>
            <p className="text-sm mt-2 text-[#5A4028]/80">
              {e.excerpt}{" "}
              <a
                href="#"
                onClick={(ev) => ev.preventDefault()}
                className="underline"
              >
                Tovább →
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-2xl font-serif">Rólam 🌿</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="rounded-xl p-6 bg-white/70 shadow-sm">
          <p className="text-sm text-[#5A4028]/90">
            Szia, Elisa vagyok — vizuális történetmesélő. Pécsről dolgozom,
            korábban Törökországban éltem. A munkám a gyógyulás, az önkifejezés
            és a misztikus, mégis meleg vintage esztétika találkozása.
          </p>

          <ul className="mt-4 text-sm space-y-2">
            <li>✦ HTML & CSS gyakorlás</li>
            <li>✦ Instagram: Lélek Terápia</li>
            <li>✦ Női integrációs facilitator felé vezető út</li>
            <li>✦ Írás: könyvterv párkapcsolatokról és családi mintákról</li>
          </ul>
        </div>

        <div className="rounded-xl p-4 bg-gradient-to-b from-white/60 to-white/40 shadow-sm">
          <h4 className="font-medium">Gyors tények</h4>
          <div className="mt-3 text-sm space-y-2">
            <div>📍 Pécs • Remote</div>
            <div>🎨 Stílus: bohém, vintage, aszimmetria</div>
            <div>📚 Fő érdeklődés: önismeret, vizuális alkotás</div>
          </div>

          <div className="mt-4">
            <a
              className="inline-block px-3 py-2 rounded bg-[#E7B8B0] text-white"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "contact";
              }}
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-serif">Kapcsolat ✉️</h2>
      <p className="mt-2 text-sm text-[#5A4028]/80">
        Szeretnél együtt dolgozni velem? Küldj üzenetet, vagy foglalj időpontot
        egy beszélgetésre.
      </p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Név" className="p-3 rounded-md border" />
        <input placeholder="Email" className="p-3 rounded-md border" />
        <textarea
          placeholder="Üzenet"
          className="p-3 rounded-md border md:col-span-2"
          rows={5}
        ></textarea>
        <button className="md:col-span-2 px-4 py-3 rounded bg-[#C36A4A] text-white">
          Küldés
        </button>
      </form>

      <div className="mt-6 text-sm text-[#5A4028]/80">
        Vagy írj közvetlenül:{" "}
        <a href="mailto:hello@elisa.example" className="underline">
          hello@elisa.example
        </a>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="rounded-2xl p-4 bg-gradient-to-b from-white/70 to-white/40 shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg bg-white/60 flex items-center justify-center">
          😊
        </div>
        <div>
          <div className="font-semibold">Elisa — vizuális terapeuta</div>
          <div className="text-sm text-[#5A4028]/80">
            Bohém, vintage, aszimmetria. Pécs.
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm">
        <div>📌 30 napos gyakorlósor: HTML–CSS → vizuális portfólió</div>
        <div className="mt-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "projects";
            }}
            className="text-sm underline"
          >
            Megnézem a projekteket
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallGallery({ projects, onOpen }) {
  return (
    <div className="rounded-2xl p-3 bg-white/70 shadow-sm">
      <h4 className="font-medium">Képtár</h4>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => onOpen(p)}
            className="w-full h-20 rounded-md overflow-hidden"
          >
            <img
              src={p.image}
              alt="thumb"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="rounded-2xl p-4 bg-gradient-to-b from-white/70 to-white/40 shadow-md">
      <div className="text-sm">
        Szeretnél együtt dolgozni? <strong>Írj: </strong>
        <a href="mailto:hello@elisa.example" className="underline">
          hello@elisa.example
        </a>
      </div>
      <div className="mt-3 text-xs text-[#5A4028]/70">
        Közösségi: Instagram • TikTok (linkek helyére a saját profilok
        kerüljenek)
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-sm text-[#5A4028]/70">
      <div>
        © {new Date().getFullYear()} Elisa — Bohém Portfólió • Designed with
        warmth ❤️
      </div>
    </footer>
  );
}
