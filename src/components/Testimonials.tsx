"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    text: "The best salon in Woodbridge. Every stylist is talented and professional. I always leave feeling amazing.",
    name: "Maria S.",
    location: "Woodbridge",
  },
  {
    text: "Lucas and his team transformed my hair. The balayage was absolutely perfect.",
    name: "Ashley R.",
    location: "Woodbridge",
  },
  {
    text: "Walk-in friendly and the wait is never long. Great prices for the quality.",
    name: "Priya K.",
    location: "Edison",
  },
  {
    text: "My whole family comes here. The kids love it too!",
    name: "Jennifer M.",
    location: "Iselin",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll(".review-card");
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="overflow-hidden mb-16 md:mb-20">
          <h2
            ref={headingRef}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="word inline-block">WHAT</span>{" "}
            <span className="word inline-block">CLIENTS</span>{" "}
            <span className="word inline-block text-gold">SAY</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="review-card group p-8 md:p-10 rounded-2xl bg-cream-alt border border-ink/5 hover:border-gold/30 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg md:text-xl text-ink leading-relaxed font-medium">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] font-bold text-gold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-ink">{review.name}</div>
                  <div className="text-sm text-muted">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
