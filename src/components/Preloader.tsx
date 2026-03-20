"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      document.documentElement.classList.remove("is-loading");
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.remove("is-loading");
        onComplete();
      },
    });

    tl.to(textRef.current, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1,
      ease: "power3.inOut",
    })
      .to(
        barFillRef.current,
        {
          width: "100%",
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      )
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.3,
      });
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader">
      <span ref={textRef} className="preloader-text">
        LUCAS
      </span>
      <div className="preloader-bar">
        <div ref={barFillRef} className="preloader-bar-fill" />
      </div>
    </div>
  );
}
