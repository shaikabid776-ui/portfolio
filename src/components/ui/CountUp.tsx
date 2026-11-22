"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useMotion } from "@/components/MotionProvider";

type CountUpProps = {
  value: number;
};

export default function CountUp({ value }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true });
  const { isMotionEnabled } = useMotion();

  useEffect(() => {
    const numberElement = numberRef.current;
    if (!numberElement) {
      return;
    }

    if (!isMotionEnabled) {
      numberElement.textContent = String(value);
      return;
    }

    // Once the final number is showing, turning motion back on must not replay the count.
    if (!isInView || numberElement.textContent === String(value)) {
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
  }, [isInView, isMotionEnabled, value]);

  return (
    <>
      <span ref={numberRef} aria-hidden="true">
        0
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
