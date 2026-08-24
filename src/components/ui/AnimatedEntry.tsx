"use client";
import { motion, useReducedMotion } from "framer-motion";
import { subtleReveal } from "@/lib/motion";
import type { ReactNode } from "react";

interface AnimatedEntryProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "span" | "h1" | "p" | "h2";
}

export function AnimatedEntry({ children, className = "", delay = 0, as = "div" }: AnimatedEntryProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }
  
  const MotionTag = motion.create(as as any);
  return (
    <MotionTag
      className={className}
      variants={subtleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}
