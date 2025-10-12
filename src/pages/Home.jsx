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
        {/* HERO */}
        <div className="rounded-2xl p-8 bg-surface shadow-lg relative overflow-hidden transition-colors duration-500">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serifFancy text-primary leading-tight">
                Bohém, kreatív<br />webdesigner
              </h1>
              <p className="mt-4 text-sm text-muted max-w-xl">
                Kézzel kódolt, személyes portfóliók — aki az érzést és a funkcionalitást köti össze. Pécs • remote
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

            <div className="hidden md:block">
  <div className="rounded-xl overflow-hidden h-56 shadow group hover:shadow-xl transition-all duration-500 ease-out">
    <img
      src="/icons/projekt1.jpg"
      alt="Grafikus artwork"
      className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
</div>
          </div>
        </div>

        {/* PROJEKTEK */}
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

        {/* BLOG */}
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
                    className="px-3 py-1 bg-primary  text-surface hover:bg-accent transition duration-300 rounded text-sm"
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
