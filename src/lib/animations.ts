import type { Variants, Transition } from "framer-motion";

const elegant: Transition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// --- Fade Up ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: elegant },
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// --- Stagger Item (used inside staggerContainer) ---
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: elegant },
};

// --- Slide Left ---
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: elegant },
};

// --- Slide Right ---
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: elegant },
};

// --- Scale Reveal ---
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// --- Clip Reveal (bottom-up wipe) ---
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// --- Shared viewport config ---
export const viewport = { once: true, amount: 0.2 } as const;

// --- Spring for hover effects ---
export const hoverSpring = { type: "spring" as const, stiffness: 300, damping: 20 };
