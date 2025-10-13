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
    <main className="min-h-screen bg-bg text-text transition-colors duration-500 overflow-x-hidden w-full mx-auto px-4 sm:px-6 md:px-8">
      <section className="space-y-10 py-8">
       {/* === HERO === */}
<div className="relative rounded-2xl p-4 md:p-8 shadow-lg overflow-hidden transition-colors duration-500 hero-gradient">
  <div className="absolute inset-0 animate-gradientMove bg-gradient-to-tr from-[#fdf0f5] via-[#f9e1ec] to-[#ffe3eb] bg-[length:400%_400%] -z-10 rounded-2xl" />

  <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center relative z-10">
    {/* SZÖVEG */}
    <div className="order-2 md:order-1 text-center md:text-left">
      <h1 className="transition-colors duration-500 hero-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serifFancy leading-tight">
        Bohém, kreatív webdesigner és front-end fejlesztő
      </h1>

      <p className="transition-colors duration-500 hero-text mt-4 md:mt-6 text-sm sm:text-base leading-relaxed tracking-wide text-muted max-w-full">
        Olyan <b>személyes portfóliókat</b> és <b>üzleti weboldalakat alkotok</b>,
        amelyek egyszerre szépek, gyorsak és stratégiailag átgondoltak.
        <br /><br />
        Kézzel kódolt design, ami egyszerre művészi és technikailag precíz.
        <b> Tipográfiától a mikrómomentumokig</b>.
        <br />
        Minden projekt egy személyes történet.
        <br />
        <b>A tiéd lesz a következő?</b>
      </p>

      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
        <Link
          to="/projektek"
          className="px-3 py-2 md:px-4 md:py-2 rounded bg-primary text-surface hover:bg-accent transition duration-300"
        >
          Megnézem a projekteket
        </Link>
        <Link
          to="/Kapcsolat"
          className="px-3 py-2 md:px-4 md:py-2 rounded bg-primary text-surface hover:bg-accent transition duration-300"
        >
          Kapcsolat
        </Link>
        <Link
          to="/blog"
          className="px-3 py-2 md:px-4 md:py-2 rounded border border-muted bg-surface text-text hover:bg-accent/10 transition-colors duration-300"
        >
          Blog bejegyzések
        </Link>
      </div>
    </div>

    {/* KÉP */}
    {/* KÉP */}
<div className="order-1 md:order-2 w-full max-w-[620px] md:max-w-[680px] lg:max-w-[720px] xl:max-w-[780px] mx-auto transition-all duration-500">
  <div className="rounded-xl overflow-hidden h-56 sm:h-64 md:h-80 lg:h-96 shadow group hover:shadow-xl transition-all duration-500 ease-out">
    <img
      src="https://i.pinimg.com/736x/f0/d3/f5/f0d3f5afc2b686bf516ca148508275be.jpg"
      alt="Grafikus artwork"
      className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
</div>

  </div>
</div>

{/* === MÁSODIK HERO === */}
<div className="rounded-2xl p-4 md:p-8 bg-surface shadow-lg relative overflow-hidden transition-colors duration-500">
  <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
    
    {/* KÉP BAL OLDALT */}
<div className="w-full max-w-[620px] md:max-w-[680px] lg:max-w-[720px] xl:max-w-[780px] mx-auto md:mx-0 transition-all duration-500">
  <div className="rounded-xl overflow-hidden h-56 sm:h-64 md:h-80 lg:h-96 shadow group hover:shadow-xl transition-all duration-500 ease-out">
    <img
      src="https://i.pinimg.com/736x/d0/a3/a1/d0a3a195f5bf9c380596f996dca1c8fb.jpg"
      alt="Grafikus artwork"
      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.65] group-hover:brightness-[0.75]"
    />
  </div>
</div>


    {/* SZÖVEG JOBB OLDALT */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl font-tan text-primary leading-tight">
        Ki vagyok én?
      </h1>

      <p className="transition-colors duration-500 hero-text mt-4 md:mt-6 text-sm sm:text-base leading-relaxed tracking-wide text-muted max-w-full">
        Szia, Elisa vagyok. Én vagyok <b>PixelNation</b> bohéman precíz webdesignere, aki hisz abban,
        hogy az <b>érzés</b> legalább annyira fontos, mint a <b>funkcionalitás</b>.
        <br /><b>Miben vagyok más?</b>
        Abban, hogy nem tömegesen gyártok weboldalakat, hanem <b>kézzel építem őket</b>.
        Olyat, amitől a látogatód megérzi, ki vagy te valójában.
        <br />A célom, hogy a design meleg, <b>őszinte és személyes</b> legyen.
        A bohémság nálam nem rendetlenség, <b>hanem szabadság</b>.
        <b>Nem dolgozom sablonokkal</b>, mert minden márkának megvan a saját vizuális hangja.
        <br /><br />A stílusom három szóban: lágy, természetes, emberi.
        Szeretem, ha <b>egy weboldal lélegzik</b>, ha van benne ritmus, tér és csend.
      </p>

      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
        <Link
          to="/rolam"
          className="px-3 py-2 md:px-4 md:py-2 rounded bg-primary text-surface hover:bg-accent transition duration-300"
        >
          Rólam
        </Link>
        <Link
          to="/kapcsolat"
          className="px-3 py-2 md:px-4 md:py-2 rounded border border-muted bg-surface text-text hover:bg-accent/10 transition-colors duration-300"
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

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProjects.map((p) => (
              <article
                key={p.id}
                className="bg-surface rounded-2xl p-4 shadow group hover:shadow-xl transition-all duration-500 ease-out"
              >
                <div className="relative overflow-hidden rounded-md mb-3 h-40 sm:h-48 md:h-56 w-full group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-50 group-hover:opacity-0 transition-opacity duration-700 ease-out"></div>
                </div>

                <h3 className="mt-3 font-semibold">{p.title}</h3>

                <p className="text-muted text-sm sm:text-base mt-1 leading-relaxed">
                  {p.short}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Link
                    to={`/projektek/${p.id}`}
                    className="px-3 py-1 rounded bg-primary text-surface hover:bg-accent transition duration-300 text-sm w-full sm:w-auto text-center"
                  >
                    Megnézem
                  </Link>
                  <a
                    href={p.live || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded border border-muted text-sm text-text hover:bg-accent/10 transition-colors duration-300 w-full sm:w-auto text-center"
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

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((p) => (
                <article
                  key={p._id}
                  className="bg-surface p-4 rounded-2xl shadow group hover:shadow-xl transition-all duration-500 ease-out"
                >
                  <div className="relative overflow-hidden rounded-md mb-3 h-40 sm:h-48 md:h-56 w-full">
                    <img
                      src={urlFor(p.mainImage).width(600).url()}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-out"></div>
                  </div>

                  <h2 className="font-semibold">{p.title}</h2>
                  <p className="text-muted text-sm sm:text-base mt-1 leading-relaxed">
                    {p.excerpt}
                  </p>

                  <div className="mt-3">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="px-3 py-1 bg-primary text-surface hover:bg-accent transition duration-300 rounded text-sm inline-block w-full sm:w-auto text-center"
                    >
                      Tovább olvasom →
                    </Link>
                  </div>
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
