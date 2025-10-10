import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <div className="py-8 text-center text-red-600">Projekt nem található</div>;

  return (
    <section className="py-8 max-w-4xl mx-auto">
      <Link to="/projektek" className="text-sm text-[#5A4028]/70">
        ← Vissza
      </Link>
      <h1 className="text-3xl font-serifFancy mt-4">{project.title}</h1>
      <p className="mt-4 text-sm text-[#5A4028]/70">{project.short}</p>
      <div className="mt-6 bg-white rounded p-4 shadow">
        <img
          src={project.image}
          className="w-full object-cover rounded"
          alt={project.title}
        />
        <div className="mt-4">{project.long}</div>
        {project.live && (
          <div className="mt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-brandRed"
            >
              Élő demo →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
