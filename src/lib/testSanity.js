import { client } from "./lib/sanityClient";

client.fetch(`*[_type == "blog"]{title, slug}`).then(console.log).catch(console.error);
