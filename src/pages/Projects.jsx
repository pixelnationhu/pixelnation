import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-serifFancy">Projektek</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.id} className="bg-white p-4 rounded-2xl shadow">
            <div className="h-40 overflow-hidden rounded-md">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-3 font-semibold">{p.title}</h2>
            <p className="text-sm text-[#5A4028]/70">{p.short}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/projektek/${p.id}`}
                className="px-3 py-1 bg-brandRed text-white rounded"
              >
                Megnézem
              </Link>
              <a
                href={p.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 border rounded"
              >
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
