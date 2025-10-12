import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "zdecxp7h", // <-- ez jó, maradjon így!
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false, // ez is rendben van
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
