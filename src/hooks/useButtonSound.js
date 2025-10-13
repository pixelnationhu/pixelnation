import { useEffect } from "react";

export function useButtonSound() {
  useEffect(() => {
    const audio = new Audio("/Sounds/sound.mp3");

    const playSound = (e) => {
      // Csak gombokra, linkekre
      if (e.target.closest("button, a")) {
        const sound = audio.cloneNode();
        sound.volume = 0.25;
        sound.playbackRate = 0.95 + Math.random() * 0.1;
        sound.play().catch(() => {});
      }
    };

    document.addEventListener("click", playSound);
    return () => document.removeEventListener("click", playSound);
  }, []);
}
