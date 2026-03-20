"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    alt: "Hair styling in progress",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Salon hair coloring",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "Professional hair treatment",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    alt: "Salon interior",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Hair styling result",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Salon experience",
    span: "",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const headingWords = headingRef.current?.querySelectorAll(".word");
      if (headingWords) {
        gsap.from(headingWords, {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }

      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream-alt"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="overflow-hidden mb-16 md:mb-20">
          <h2
            ref={headingRef}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="word inline-block">OUR</span>{" "}
            <span className="word inline-block text-gold">GALLERY</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(4,200px)] gap-4"
        >
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="gallery-overlay absolute inset-0 bg-gold/20 flex items-center justify-center">
                <span className="text-cream font-[family-name:var(--font-playfair)] text-xl font-bold">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
