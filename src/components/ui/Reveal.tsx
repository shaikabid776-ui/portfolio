"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // The initial state must match the server render, so reduced motion
      // skips the animation by making it instant rather than removing it.
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
