"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.from(words, {
          yPercent: 120,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-40 bg-cream-alt"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <div ref={headingRef} className="overflow-hidden">
          <div className="overflow-hidden">
            <span className="word inline-block font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.95]">
              READY
            </span>{" "}
            <span className="word inline-block font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.95]">
              FOR
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="word inline-block font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.95]">
              YOUR
            </span>{" "}
            <span className="word inline-block font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.95] text-gold">
              GLOW
            </span>{" "}
            <span className="word inline-block font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.95] text-gold">
              UP?
            </span>
          </div>
        </div>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-6">
          <a
            href="tel:+17325550234"
            className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] font-bold text-ink hover:text-gold transition-colors"
          >
            (732) 555-0234
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-5 bg-gold text-cream text-lg font-semibold rounded-full hover:bg-amber-700 transition-colors duration-300"
          >
            Book Your Appointment
          </a>
          <p className="text-muted text-sm mt-2">
            Walk-ins welcome · Mon–Sat 9am–8pm · Sun 10am–6pm
          </p>
        </div>
      </div>
    </section>
  );
}
