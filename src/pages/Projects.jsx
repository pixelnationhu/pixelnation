import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-serif text-center mb-8">Projektek</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-surface rounded-2xl p-4 shadow group hover:shadow-xl transition-all duration-500 ease-out"
          >
            <div className="h-40 overflow-hidden rounded-md">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-3 font-semibold">{p.title}</h2>
            <p className="text-sm text-muted mb-3">{p.short}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/projektek/${p.id}`}
                className="px-3 py-1 bg-primary text-surface hover:bg-accent transition duration-300 rounded text-sm"
              >
                Megnézem
              </Link>
              <a
                href={p.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 border border-muted rounded text-sm text-text hover:bg-accent/10 transition-colors duration-300"
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
