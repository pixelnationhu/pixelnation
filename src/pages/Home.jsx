import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <main className="min-h-screen bg-bg text-text transition-colors duration-500">
      <section className="space-y-10 py-8">

        {/* === HERO === */}
        <div className="relative rounded-2xl p-8 shadow-lg overflow-hidden transition-colors duration-500 hero-gradient">
          <div className="absolute inset-0 animate-gradientMove bg-gradient-to-tr from-[#fdf0f5] via-[#f9e1ec] to-[#ffe3eb] bg-[length:400%_400%] -z-10 rounded-2xl" />

          <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
            {/* SZÖVEG */}
            <div>
              <h1 className="transition-colors duration-500 hero-text text-4xl md:text-6xl font-serifFancy leading-tight">
                Bohém, kreatív webdesigner és front-end fejlesztő
              </h1>
              <p className="transition-colors duration-500 hero-text mt-6 text-[1rem] leading-[1.5] tracking-wide text-muted max-w-2xl">
                Olyan <b>személyes portfóliókat</b> és <b>üzleti weboldalakat alkotok</b>,
                amelyek egyszerre szépek, gyorsak és stratégiailag átgondoltak.
                Hiszek abban, hogy minden a részletekben rejlik; a{" "}
                <b>tipográfiától a mikrómomentumokig</b>,
                mert minden apróság hozzájárul a felhasználói élményhez.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/projektek"
                  className="px-4 py-2 rounded bg-primary text-surface hover:bg-accent transition duration-300"
                >
                  Megnézem a projekteket
                </Link>
                <Link
                  to="/blog"
                  className="px-4 py-2 rounded border border-muted bg-surface text-text hover:bg-accent/10 transition-colors duration-300"
                >
                  Naplóm
                </Link>
              </div>
            </div>

            {/* KÉP */}
            <div className="hidden md:block relative z-10">
              <div className="rounded-xl overflow-hidden h-80 shadow group hover:shadow-xl transition-all duration-500 ease-out">
                <img
                  src="/icons/projekt1.jpg"
                  alt="Grafikus artwork"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === MÁSODIK HERO === */}
        <div className="rounded-2xl p-8 bg-surface shadow-lg relative overflow-hidden transition-colors duration-500">
          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* KÉP BAL OLDALT */}
            <div className="hidden md:block">
              <div className="rounded-xl overflow-hidden h-80 shadow group hover:shadow-xl transition-all duration-500 ease-out">
                <img
                  src="https://i.pinimg.com/736x/63/9c/55/639c55bafc5b50dfcb49ab57caef8ffe.jpg"
                  alt="Grafikus artwork"
                  className="w-full h-200 object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.60] group-hover:brightness-[0.70] duration-500 ease-out"
                />
              </div>
            </div>

            {/* SZÖVEG JOBB OLDALT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-serifFancy text-primary leading-tight">
                Ki vagyok én?
              </h1>
              
              <p className="transition-colors duration-500 hero-text mt-6 text-[1rem] leading-[1.5] tracking-wide text-muted max-w-2xl">
                Szia, Elisa vagyok. Én vagyok <b>PixelNation</b> bohéman precíz webdesignere, aki hisz abban,
                hogy az <b>érzés</b> legalább annyira fontos, mint a <b>funkcionalitás</b>. Egy weboldal számomra
                nem csak technikai projekt, hanem vizuális történetmesélés. A célom, hogy a design
                meleg, <b>őszinte és személyes</b> legyen, ahogy az emberi kapcsolatok is. A bohémság nálam
                nem rendetlenség, <b>hanem szabadság</b>. <b>Nem dolgozom sablonokkal</b>, mert minden márkának
                megvan a saját vizuális hangja. A stílusom három szóban: lágy, természetes, emberi.
                Szeretem, ha <b>egy weboldal lélegzik</b>, ha van benne ritmus, tér, és csend.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/rolam"
                  className="px-4 py-2 rounded bg-primary text-surface hover:bg-accent transition duration-300"
                >
                  Rólam
                </Link>
                <Link
                  to="/kapcsolat"
                  className="px-4 py-2 rounded border border-muted bg-surface text-text hover:bg-accent/10 transition-colors duration-300"
                >
                  Dolgozz velem!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === PROJEKTEK === */}
        <div>
          <h2 className="text-2xl font-serifFancy">Projektek</h2>
          <p className="text-sm text-muted">Utolsó munkák</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProjects.map((p) => (
              <article
                key={p.id}
                className="bg-surface rounded-2xl p-4 shadow group hover:shadow-xl transition-all duration-500 ease-out"
              >
                <div className="relative overflow-hidden rounded-md mb-3 h-40 w-full group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-50 group-hover:opacity-0 transition-opacity duration-700 ease-out"></div>
                </div>

                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="text-sm text-muted mb-3">{p.short}</p>
                <div className="flex gap-2">
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
        </div>

        {/* === BLOG === */}
        <div>
          <h2 className="text-2xl font-serifFancy">Napló</h2>
          <p className="text-sm text-muted">Friss bejegyzések</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((p) => (
                <article
                  key={p._id}
                  className="bg-surface p-4 rounded-2xl shadow group hover:shadow-xl transition-all duration-500 ease-out"
                >
                  <div className="relative overflow-hidden rounded-md mb-3 h-40 w-full">
                    <img
                      src={urlFor(p.mainImage).width(600).url()}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-out"></div>
                  </div>

                  <h2 className="font-semibold">{p.title}</h2>
                  <p className="text-sm text-muted">{p.excerpt}</p>

                  <Link
                    to={`/blog/${p.slug}`}
                    className="px-3 py-1 bg-primary text-surface hover:bg-accent transition duration-300 rounded text-sm"
                  >
                    Tovább olvasom →
                  </Link>
                </article>
              ))
            ) : (
              <p className="text-sm text-muted">Nincsenek még bejegyzések</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
