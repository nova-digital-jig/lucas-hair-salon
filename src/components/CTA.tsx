"use client";

import { motion } from "framer-motion";
import {
  clipReveal,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-rose/10">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={staggerItem}
          className="text-xs tracking-[0.25em] uppercase text-rose font-medium mb-4"
        >
          Let&apos;s Get Started
        </motion.p>

        <motion.h2
          variants={clipReveal}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold mb-5"
        >
          Ready for Your
          <br />
          <span className="italic text-rose">Transformation?</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="text-charcoal-light leading-relaxed mb-8 max-w-lg mx-auto"
        >
          Book your appointment today and let our expert stylists bring your
          vision to life. Walk-ins are always welcome.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
