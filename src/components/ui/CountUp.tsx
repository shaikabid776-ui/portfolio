"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: number;
};

export default function CountUp({ value }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const numberElement = numberRef.current;
    if (!numberElement) {
      return;
    }

    if (prefersReducedMotion) {
      numberElement.textContent = String(value);
      return;
    }

    if (!isInView) {
      return;
    }

    // Writing to the DOM directly avoids a React re-render on every frame.
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        numberElement.textContent = String(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  return (
    <>
      <span ref={numberRef} aria-hidden="true">
        0
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
