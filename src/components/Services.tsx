"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/animations";

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
  return (
    <section id="services" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={staggerItem}
            className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold"
          >
            Our Services
          </motion.h2>
        </motion.div>

        {/* Service Menu */}
        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Category Header */}
              <motion.h3
                variants={slideLeft}
                className="text-xs tracking-[0.3em] uppercase text-rose font-semibold mb-6"
              >
                {category.title}
              </motion.h3>

              {/* Service Items */}
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={staggerItem}
                    className="flex items-baseline"
                  >
                    <span className="text-charcoal font-medium text-base">
                      {item.name}
                    </span>
                    <span className="service-dots" />
                    <span className="text-charcoal font-display text-lg font-semibold">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="mt-8 border-b border-rose/10" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-muted text-sm mb-5">
            Prices may vary based on hair length and complexity.
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 bg-gold text-white font-medium rounded-full hover:bg-gold-light transition-colors duration-200 text-sm"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
