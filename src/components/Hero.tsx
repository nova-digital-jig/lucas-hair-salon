"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="stagger-children order-2 lg:order-1">
            <p className="fade-up text-xs tracking-[0.25em] uppercase text-muted font-medium mb-6">
              Woodbridge, NJ &middot; Est. 2010
            </p>

            <h1 className="fade-up font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-charcoal font-semibold mb-6">
              Where Beauty
              <br />
              Meets <span className="italic text-rose">Artistry</span>
            </h1>

            <p className="fade-up text-charcoal-light text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Full-service hair salon specializing in color, cuts, and styling.
              Walk-ins welcome. Open 7 days.
            </p>

            <div className="fade-up flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-rose text-white font-medium rounded-full hover:bg-rose-light transition-colors duration-200 text-sm"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-charcoal hover:text-rose transition-colors duration-200 underline underline-offset-4 decoration-rose/40"
              >
                View Services
              </a>
            </div>

            <div className="fade-up flex items-center gap-2 text-sm text-muted">
              <span className="text-gold">&#9733;</span>
              <span>4.8 on Google &middot; 320+ Reviews</span>
            </div>
          </div>

          {/* Right — Image */}
          <div className="fade-up order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=960&q=80"
                alt="Beautiful salon interior with modern styling stations"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
