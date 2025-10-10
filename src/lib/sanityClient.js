import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zdecxp7h", // <-- EZ a te projekted ID-ja
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false, // <-- FONTOS: állítsd false-ra!
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
