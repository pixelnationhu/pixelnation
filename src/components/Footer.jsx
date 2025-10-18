import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [tiktokVideos, setTiktokVideos] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);

  const TIKTOK_FEED = "https://rss.app/feeds/8Rvc4HIEUMX7GeO4.xml";
  const INSTAGRAM_USER = "elisaozcnn";

  const parseRSS = async (url) => {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`
    );
    const data = await response.json();
    return data.items || [];
  };

  useEffect(() => {
    async function fetchFeeds() {
      try {
        // --- TikTok feed ---
        const tiktokData = await parseRSS(TIKTOK_FEED);
        setTiktokVideos(
          tiktokData.slice(0, 3).map((item) => ({
            id: item.guid,
            img: item.thumbnail || item.enclosure?.link || "/fallback-tiktok.jpg",
            url: item.link,
          }))
        );

        // --- Instagram feed (CORS-safe verzió) ---
        const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://www.instagram.com/${INSTAGRAM_USER}/?__a=1&__d=dis`
        )}`;

        const response = await fetch(proxyURL);
        const proxyData = await response.json();
        const data = JSON.parse(proxyData.contents);

        const posts =
          data?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];

        setInstagramPosts(
          posts.slice(0, 3).map((edge) => ({
            id: edge.node.id,
            img: edge.node.display_url,
            url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
          }))
        );
      } catch (err) {
        console.error("Feed betöltési hiba:", err);
      }
    }

    fetchFeeds();
  }, []);

  return (
    <footer className="relative bg-surface text-text mt-24 py-16 border-t border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14 items-start">

        {/* TikTok feed */}
        <div>
          <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
            🎬 Legújabb TikTok videók
          </h3>
          <div className="flex gap-4">
            {tiktokVideos.length > 0 ? (
              tiktokVideos.map((v) => (
                <motion.a
                  key={v.id}
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="group relative block w-[95px] h-[130px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={v.img}
                    alt="TikTok video"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-all duration-300">
                    Megnézem →
                  </div>
                </motion.a>
              ))
            ) : (
              <p className="text-xs text-muted">Betöltés...</p>
            )}
          </div>
        </div>

        {/* Középső rész — logó + infó */}
        <div className="text-center flex flex-col items-center justify-center space-y-3">
          <img
            src="https://i.ibb.co/236W5k22/pixelnationlogo.png"
            alt="Pixelnation logó"
            className="w-36 h-auto mb-2 dark:hidden"
          />
          <img
            src="https://i.ibb.co/cKpCnFXG/pixelnationlogo-dark.png"
            alt="Pixelnation logó dark"
            className="w-36 h-auto mb-2 hidden dark:block"
          />
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Pixelnation — Creative Webdesigner
          </p>
        </div>

        {/* Instagram feed */}
        <div className="text-right">
          <h3 className="text-primary font-semibold mb-4 flex justify-end items-center gap-2">
            📸 Legújabb Instagram posztok
          </h3>
          <div className="flex justify-end gap-4">
            {instagramPosts.length > 0 ? (
              instagramPosts.map((p) => (
                <motion.a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="group relative block w-[95px] h-[130px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={p.img}
                    alt="Instagram post"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-all duration-300">
                    Megnézem →
                  </div>
                </motion.a>
              ))
            ) : (
              <p className="text-xs text-muted">Betöltés...</p>
            )}
          </div>
        </div>
      </div>

      {/* Dekoratív fényfolt */}
      <motion.div
        className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}
