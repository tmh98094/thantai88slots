"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapEntrance() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap='rise']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 42, scale: 0.985, opacity: 0.82 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.86,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });
      gsap.to("[data-gsap='pulse']", {
        scale: 1.035,
        repeat: -1,
        yoyo: true,
        duration: 1.15,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
