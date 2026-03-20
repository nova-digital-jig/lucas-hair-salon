"use client";

import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Lucas is the only salon I trust with my color. The balayage they did last visit was absolutely stunning — I get compliments everywhere I go!",
    name: "Maria S.",
    location: "Woodbridge, NJ",
    initial: "M",
  },
  {
    quote:
      "I've been coming here for three years now and the service is always consistent. The stylists really listen and the atmosphere is so relaxing.",
    name: "Ashley T.",
    location: "Iselin, NJ",
    initial: "A",
  },
  {
    quote:
      "Best haircut I've ever gotten. They took the time to understand exactly what I wanted and delivered beyond my expectations. Highly recommend!",
    name: "David R.",
    location: "Avenel, NJ",
    initial: "D",
  },
  {
    quote:
      "The keratin treatment completely transformed my hair. It's so smooth and manageable now. The staff is incredibly friendly and professional.",
    name: "Jennifer L.",
    location: "Colonia, NJ",
    initial: "J",
  },
];

export default function Testimonials() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="fade-up text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4">
            Client Love
          </p>
          <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold">
            What Our Clients Say
          </h2>
        </div>

        {/* Grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="fade-up bg-warm-white rounded-2xl p-8 md:p-10 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-6 right-8 font-display text-6xl text-rose/15 leading-none select-none">
                &ldquo;
              </span>

              <p className="text-charcoal-light leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar initial */}
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                  <span className="font-display text-rose font-semibold text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
