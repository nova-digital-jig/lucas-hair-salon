"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 });

      // Animate each word in each line
      [line1Ref, line2Ref, line3Ref].forEach((lineRef, lineIndex) => {
        const words = lineRef.current?.querySelectorAll(".hero-word");
        if (words) {
          tl.from(
            words,
            {
              yPercent: 120,
              opacity: 0,
              rotateX: -40,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
            },
            lineIndex * 0.15
          );
        }
      });

      tl.from(
        subtextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.6
      )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0.8
        )
        .from(
          trustRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wordClass =
    "hero-word inline-block font-[family-name:var(--font-playfair)] font-bold leading-[0.95] tracking-[-0.04em]";
  const heroSize = "text-[clamp(3.5rem,9vw,9rem)]";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Lucas Hair Salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-20">
        <div className="overflow-hidden">
          <div ref={line1Ref} className="overflow-hidden" style={{ perspective: "600px" }}>
            <span className={`${wordClass} ${heroSize}`}>YOUR</span>{" "}
            <span className={`${wordClass} ${heroSize}`}>BEST</span>
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={line2Ref} className="overflow-hidden" style={{ perspective: "600px" }}>
            <span className={`${wordClass} ${heroSize}`}>LOOK</span>{" "}
            <span className={`${wordClass} ${heroSize} text-gold`}>STARTS</span>
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={line3Ref} className="overflow-hidden" style={{ perspective: "600px" }}>
            <span className={`${wordClass} ${heroSize}`}>HERE.</span>
          </div>
        </div>

        <p
          ref={subtextRef}
          className="mt-8 max-w-lg text-lg md:text-xl text-muted leading-relaxed"
        >
          Full-service hair salon in Woodbridge, NJ. Walk-ins welcome. Open 7
          days.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-cream font-semibold rounded-full hover:bg-amber-700 transition-colors duration-300 text-lg"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 border-2 border-ink text-ink font-semibold rounded-full hover:bg-ink hover:text-cream transition-colors duration-300 text-lg"
          >
            View Services
          </a>
        </div>

        <div
          ref={trustRef}
          className="mt-10 flex flex-wrap items-center gap-4 text-muted"
        >
          <span className="flex items-center gap-1.5 text-sm md:text-base font-medium">
            <svg
              className="w-5 h-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.8★
          </span>
          <span className="text-muted/40">·</span>
          <span className="text-sm md:text-base font-medium">320+ Reviews</span>
          <span className="text-muted/40">·</span>
          <span className="text-sm md:text-base font-medium">Open 7 Days</span>
        </div>
      </div>
    </section>
  );
}
