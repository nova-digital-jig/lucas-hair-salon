"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "15+", label: "Years" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "4.8★", label: "Google Rating" },
  { value: "7 Days", label: "Open Weekly" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Parallax on image
      gsap.to(imageRef.current?.querySelector("img") ?? null, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fade in
      gsap.from(contentRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
              alt="Lucas Hair Salon stylist at work"
              fill
              className="object-cover scale-110"
            />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              WHERE <span className="text-gold">STYLE</span> MEETS
              <br />
              ARTISTRY
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              Founded by Lucas, our salon has been the go-to destination for
              Woodbridge residents seeking quality hair care. With a team of
              experienced stylists and a warm, welcoming atmosphere, we
              transform not just hair, but confidence.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-lg">
              Whether you need a fresh cut, bold color, or a relaxing treatment,
              we bring artistry and expertise to every chair.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
