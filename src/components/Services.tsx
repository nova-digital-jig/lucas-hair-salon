"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { num: "01", name: "Women's Haircut", price: "$45+", desc: "Precision cuts tailored to your style and face shape" },
  { num: "02", name: "Men's Haircut", price: "$30+", desc: "Classic to modern cuts, fades, and beard trims" },
  { num: "03", name: "Hair Coloring", price: "$85+", desc: "Full color, root touch-ups, and creative color" },
  { num: "04", name: "Highlights / Balayage", price: "$120+", desc: "Hand-painted dimension and sun-kissed tones" },
  { num: "05", name: "Braids & Extensions", price: "$65+", desc: "Box braids, cornrows, sew-ins, and clip-ins" },
  { num: "06", name: "Blowout & Styling", price: "$55+", desc: "Silk press, voluminous blowouts, and event styling" },
  { num: "07", name: "Keratin Treatment", price: "$200+", desc: "Smooth, frizz-free hair that lasts for months" },
  { num: "08", name: "Nails & Manicure", price: "$35+", desc: "Gel, acrylic, dip powder, and classic manicures" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Heading animation
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

      // Service items stagger
      const items = listRef.current?.querySelectorAll(".service-item");
      if (items) {
        gsap.from(items, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
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
            <span className="word inline-block text-gold">SERVICES</span>
          </h2>
        </div>

        <div ref={listRef} className="divide-y divide-ink/10">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="service-item group py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-0 cursor-default relative"
            >
              <span className="text-gold font-mono text-sm md:text-base w-16 shrink-0">
                {service.num}
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-bold flex-1 group-hover:text-gold transition-colors duration-300">
                {service.name}
              </span>
              <span className="text-muted text-sm md:text-base md:flex-1 md:text-center hidden md:block">
                {service.desc}
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-gold md:w-32 md:text-right">
                {service.price}
              </span>
              <div className="service-line absolute bottom-0 left-0 right-0 h-px bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
