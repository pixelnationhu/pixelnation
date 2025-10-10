import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "blog"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage
      }`)
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="py-8">
      <h1 className="text-3xl font-serifFancy">Napló</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p._id} className="bg-white p-4 rounded-2xl shadow">
            {p.mainImage && (
              <img
                src={urlFor(p.mainImage).width(600).url()}
                alt={p.title}
                className="rounded-md mb-3 h-40 w-full object-cover"
              />
            )}
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-[#5A4028]/70">{p.excerpt}</p>
            <Link
              to={`/blog/${p.slug.current}`}
              className="text-brandRed mt-2 inline-block"
            >
              Tovább olvasom →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
