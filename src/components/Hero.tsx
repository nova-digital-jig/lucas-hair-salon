"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideLeft,
  slideRight,
  scaleReveal,
  fadeUp,
  viewport,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={staggerItem}
              className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-6"
            >
              Woodbridge, NJ &middot; Est. 2010
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-charcoal font-semibold mb-6"
            >
              Where Beauty
              <br />
              Meets <span className="italic text-rose">Artistry</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-charcoal-light text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Full-service hair salon specializing in color, cuts, and styling.
              Walk-ins welcome. Open 7 days.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
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
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <span className="text-gold">&#9733;</span>
              <span>4.8 on Google &middot; 320+ Reviews</span>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            className="order-1 lg:order-2"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
              variants={scaleReveal}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=960&q=80"
                alt="Beautiful salon interior with modern styling stations"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
