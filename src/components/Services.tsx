"use client";

import { useEffect, useRef } from "react";

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Haircuts",
    items: [
      { name: "Women's Cut", price: "$45+" },
      { name: "Men's Cut", price: "$30+" },
      { name: "Kids Cut", price: "$25+" },
    ],
  },
  {
    title: "Coloring",
    items: [
      { name: "Single Process", price: "$85+" },
      { name: "Highlights", price: "$120+" },
      { name: "Balayage", price: "$150+" },
      { name: "Color Correction", price: "$200+" },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Blowout", price: "$55+" },
      { name: "Updo", price: "$75+" },
      { name: "Keratin", price: "$200+" },
      { name: "Deep Conditioning", price: "$40+" },
    ],
  },
  {
    title: "Nails",
    items: [
      { name: "Manicure", price: "$35+" },
      { name: "Gel Manicure", price: "$45+" },
      { name: "Pedicure", price: "$50+" },
    ],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="fade-up text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4">
            What We Offer
          </p>
          <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold">
            Our Services
          </h2>
        </div>

        {/* Service Menu */}
        <div className="stagger-children space-y-12">
          {categories.map((category) => (
            <div key={category.title} className="fade-up">
              {/* Category Header */}
              <h3 className="text-xs tracking-[0.3em] uppercase text-rose font-semibold mb-6">
                {category.title}
              </h3>

              {/* Service Items */}
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline"
                  >
                    <span className="text-charcoal font-medium text-base">
                      {item.name}
                    </span>
                    <span className="service-dots" />
                    <span className="text-charcoal font-display text-lg font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-8 border-b border-rose/10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up text-center mt-14">
          <p className="text-muted text-sm mb-5">
            Prices may vary based on hair length and complexity.
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 bg-gold text-white font-medium rounded-full hover:bg-gold-light transition-colors duration-200 text-sm"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
