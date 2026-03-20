"use client";

import { useEffect, useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    alt: "Beautiful red hair coloring",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Blonde highlights styling",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "Professional hair treatment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    alt: "Elegant updo hairstyle",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Natural curly hair styling",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Salon hair washing station",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
    alt: "Balayage hair coloring technique",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    alt: "Long flowing styled hair",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
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
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="fade-up text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4">
            Our Work
          </p>
          <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold">
            Style Gallery
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-display text-xl italic">
                    Lucas
                  </p>
                  <p className="text-white/80 text-xs tracking-widest uppercase mt-1">
                    View
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
