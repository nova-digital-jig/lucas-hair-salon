"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-rose/10">
      <div className="max-w-3xl mx-auto px-6 text-center stagger-children">
        <p className="fade-up text-xs tracking-[0.25em] uppercase text-rose font-medium mb-4">
          Let&apos;s Get Started
        </p>
        <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold mb-5">
          Ready for Your
          <br />
          <span className="italic text-rose">Transformation?</span>
        </h2>
        <p className="fade-up text-charcoal-light leading-relaxed mb-8 max-w-lg mx-auto">
          Book your appointment today and let our expert stylists bring your
          vision to life. Walk-ins are always welcome.
        </p>
        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-light transition-colors duration-200 text-sm"
          >
            Book Your Appointment
          </a>
          <a
            href="tel:+17325550234"
            className="text-sm font-medium text-charcoal hover:text-rose transition-colors duration-200"
          >
            Or call: (732) 555-0234
          </a>
        </div>
      </div>
    </section>
  );
}
