export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-ink text-cream/80">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Logo & tagline */}
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-cream">
              LUCAS <span className="text-gold">SALON</span>
            </div>
            <p className="mt-4 text-cream/50 leading-relaxed">
              Your Best Look Starts Here. Full-service hair salon in Woodbridge,
              NJ.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cream mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-cream/60">
              <p>Woodbridge, NJ</p>
              <p>
                <a
                  href="tel:+17325550234"
                  className="hover:text-gold transition-colors"
                >
                  (732) 555-0234
                </a>
              </p>
              <p>
                <a
                  href="mailto:lucashairsalon@example.com"
                  className="hover:text-gold transition-colors"
                >
                  lucashairsalon@example.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cream mb-4">
              Hours
            </h3>
            <div className="space-y-2 text-cream/60">
              <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
              <p>Sun: 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/40">
          <p>
            Serving Woodbridge, Edison, Iselin, Avenel, and Middlesex County
          </p>
          <p>
            © 2026 Lucas Hair Salon. Website by{" "}
            <a
              href="https://nova-digital-nextjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              Nova Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
