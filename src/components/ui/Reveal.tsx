"use client";

import { useEffect } from "react";
import { m } from "framer-motion";
import { useMotion } from "@/components/MotionProvider";
import { markRevealReady } from "@/lib/revealState";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  // Blur is costly to paint on phones, so it is kept for headings only.
  blur?: boolean;
  className?: string;
};

export default function Reveal({ children, delay = 0, blur = false, className }: RevealProps) {
  const { isMotionEnabled } = useMotion();

  useEffect(markRevealReady, []);

  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 16, ...(blur && { filter: "blur(8px)" }) }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur && {
          filter: "blur(0px)",
          // Any filter, even blur(0px), keeps a compositing layer and traps fixed children, so clear it once done.
          transitionEnd: { filter: "none" },
        }),
      }}
      viewport={{ once: true }}
      // The initial state must match the server render, so turning motion off
      // skips the animation by making it instant rather than removing it.
      transition={
        isMotionEnabled ? { duration: 0.6, delay, ease: "easeOut" } : { duration: 0 }
      }
    >
      {children}
    </m.div>
  );
}
