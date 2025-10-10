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
    <section className="space-y-10 py-8">
      {/* Hero */}
      <div className="rounded-2xl p-8 bg-white shadow-lg relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serifFancy text-brandRed leading-tight">
              Bohém, kreatív<br />webdesigner
            </h1>
            <p className="mt-4 text-sm text-[#5A4028]/80 max-w-xl">
              Kézzel kódolt, személyes portfóliók — aki az érzést és a
              funkcionalitást köti össze. Pécs • remote
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/projektek"
                className="px-4 py-2 rounded bg-brandRed text-white"
              >
                Megnézem a projekteket
              </Link>
              <Link to="/blog" className="px-4 py-2 rounded border">
                Naplóm
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-xl bg-aqua h-56 flex items-center justify-center text-2xl text-white">
              Grafikus/Artwork helye
            </div>
          </div>
        </div>
      </div>

      {/* Projektek */}
      <div>
        <h2 className="text-2xl font-serifFancy">Projektek</h2>
        <p className="text-sm text-[#5A4028]/70">Utolsó munkák</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProjects.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl p-4 shadow">
              <div className="h-40 bg-[#f0f0f0] rounded-md overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-[#5A4028]/70">{p.short}</p>
              <div className="mt-3 flex gap-2">
                <Link
                  to={`/projektek/${p.id}`}
                  className="px-3 py-1 rounded bg-brandRed text-white text-sm"
                >
                  Megnézem
                </Link>
                <a
                  href={p.live || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded border text-sm"
                >
                  Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div>
        <h2 className="text-2xl font-serifFancy">Napló</h2>
        <p className="text-sm text-[#5A4028]/70">Friss bejegyzések</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.length > 0 ? (
            latestPosts.map((p) => (
              <article key={p._id} className="bg-white p-4 rounded-2xl shadow">
                {p.mainImage && (
                  <img
                    src={urlFor(p.mainImage).width(400).url()}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-[#5A4028]/70">{p.excerpt}</p>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-3 inline-block text-brandRed"
                >
                  Tovább olvasom →
                </Link>
              </article>
            ))
          ) : (
            <p className="text-sm text-gray-500">Nincsenek még bejegyzések</p>
          )}
        </div>
      </div>
    </section>
  );
}
