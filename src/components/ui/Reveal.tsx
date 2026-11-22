"use client";

import { motion } from "framer-motion";
import { useMotion } from "@/components/MotionProvider";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const { isMotionEnabled } = useMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        // Any filter, even blur(0px), keeps a compositing layer and traps fixed children, so clear it once done.
        transitionEnd: { filter: "none" },
      }}
      viewport={{ once: true }}
      // The initial state must match the server render, so turning motion off
      // skips the animation by making it instant rather than removing it.
      transition={
        isMotionEnabled ? { duration: 0.6, delay, ease: "easeOut" } : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
