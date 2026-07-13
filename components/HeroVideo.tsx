"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative, muted, looping background video for the hero.
 *
 * Sits behind the hero content and is heavily washed out by an apricot-100
 * overlay so it reads as a subtle texture, not a focal point. Pauses for
 * visitors who prefer reduced motion.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      video.pause();
    } else {
      // Autoplay can reject on some browsers; ignore the rejection quietly.
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover opacity-70"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
  );
}
