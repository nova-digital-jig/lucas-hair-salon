"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                alt="Inside Lucas Hair Salon — warm, welcoming atmosphere"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Accent corner */}
              <div className="absolute bottom-0 left-0 bg-rose/90 text-white px-6 py-4 rounded-tr-2xl">
                <p className="font-display text-2xl font-semibold">15+</p>
                <p className="text-xs tracking-widest uppercase">
                  Years of Beauty
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="stagger-children">
            <p className="fade-up text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4">
              Our Story
            </p>
            <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold mb-6">
              More Than Just
              <br />a <span className="italic text-rose">Hair Salon</span>
            </h2>
            <p className="fade-up text-charcoal-light leading-relaxed mb-5">
              Lucas Hair Salon has been a cornerstone of the Woodbridge community
              since 2010. What started as a small studio with a big dream has
              grown into a full-service salon where clients become family.
            </p>
            <p className="fade-up text-charcoal-light leading-relaxed mb-8">
              Our team of skilled stylists stays at the forefront of trends and
              techniques, attending advanced training throughout the year. Whether
              you&apos;re here for a fresh cut, a bold color transformation, or a
              relaxing treatment, we&apos;re dedicated to making you look and
              feel your absolute best.
            </p>

            {/* Stats */}
            <div className="fade-up grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gold">
                  320+
                </p>
                <p className="text-xs text-muted tracking-wide uppercase mt-1">
                  Google Reviews
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gold">
                  8
                </p>
                <p className="text-xs text-muted tracking-wide uppercase mt-1">
                  Expert Stylists
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-gold">
                  7
                </p>
                <p className="text-xs text-muted tracking-wide uppercase mt-1">
                  Days Open
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
