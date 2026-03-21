"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-display italic text-2xl text-white font-semibold tracking-tight">
                Lucas
              </span>
              <span className="block text-[9px] tracking-[0.3em] uppercase text-white/50 mt-[-2px]">
                Hair Salon
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              Premium hair salon in Woodbridge, NJ. Specializing in cuts, color,
              styling, and nail services since 2010.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href="tel:+17325550234"
                  className="hover:text-rose transition-colors"
                >
                  (732) 555-0234
                </a>
              </p>
              <p>
                <a
                  href="mailto:lucashairsalon@example.com"
                  className="hover:text-rose transition-colors"
                >
                  lucashairsalon@example.com
                </a>
              </p>
              <p className="text-white/50">
                123 Main Street
                <br />
                Woodbridge, NJ 07095
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4">
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Mon – Sat</span>
                <span>9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Sunday</span>
                <span>10:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose/20 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.19a8.16 8.16 0 0 0 4.29 1.2V6.69h-.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lucas Hair Salon. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            Website by{" "}
            <a
              href="https://nova-agents.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-rose transition-colors"
            >
              Vektor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
