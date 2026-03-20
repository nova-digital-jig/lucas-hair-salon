"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleReveal,
  staggerContainer,
  staggerItem,
  hoverSpring,
  viewport,
} from "@/lib/animations";

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

const galleryStagger: typeof staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={staggerItem}
            className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4"
          >
            Our Work
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold"
          >
            Style Gallery
          </motion.h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
          variants={galleryStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={scaleReveal}
              whileHover={{ scale: 1.05, transition: hoverSpring }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
