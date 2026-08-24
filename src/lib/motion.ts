"use client";
import type { Variants } from "framer-motion";

// Impeccable Motion Polish: 
// Reduced duration from 0.9s to 0.5s for snappier UI feel.
// Removed blur filter which causes layout jumps and jank in Chromium/Safari on mobile.
// Adjusted ease to a crisp custom cubic-bezier.

export const subtleReveal: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: customDelay,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
