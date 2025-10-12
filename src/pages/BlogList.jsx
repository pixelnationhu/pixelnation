import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 🔹 ez fontos!
import { client, urlFor } from "../lib/sanityClient";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(_createdAt desc){
        _id,
        title,
        slug,
        excerpt,
        mainImage
      }`
      )
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="py-8">
      <h1 className="text-3xl font-serif text-center mb-8">Napló</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p._id}
            className="bg-surface rounded-2xl p-4 shadow group hover:shadow-xl transition-all duration-500 ease-out"
          >
            <div className="relative overflow-hidden rounded-md mb-3 h-40 w-full">
  <img
    src={urlFor(p.mainImage).width(600).url()}
    alt={p.title}
    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/40 opacity-50 group-hover:opacity-0 transition-opacity duration-700 ease-out"></div>
</div>

            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-[#5A4028]/70 dark:text-[#E8E6E3]/80">{p.excerpt}</p>

            <Link
              to={`/blog/${p.slug.current}`}
              className="px-3 py-0.5 rounded bg-primary text-surface hover:bg-accent transition duration-300"
            >
              Tovább olvasom →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
