import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";
import BlockContent from "@sanity/block-content-to-react";

export default function BlogPost() {
  const { id } = useParams(); // slug értéke
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog" && slug.current == $id][0]{
          title,
          mainImage,
          body,
          _createdAt
        }`,
        { id }
      )
      .then(setPost)
      .catch(console.error);
  }, [id]);

  if (!post)
    return <div className="py-8 text-center text-[#5A4028]/60">Betöltés...</div>;

  return (
    <article className="py-8 max-w-3xl mx-auto">
      <Link to="/blog" className="text-sm text-[#5A4028]/70">
        ← Vissza
      </Link>

      <h1 className="text-3xl font-serifFancy mt-4">{post.title}</h1>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).url()}
          alt={post.title}
          className="rounded-md mt-4 mb-6 w-full object-cover"
        />
      )}

      <BlockContent
        blocks={post.body}
        projectId="oly226lgl"
        dataset="production"
      />
    </article>
  );
}
