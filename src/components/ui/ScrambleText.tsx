"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/MotionProvider";

const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/";
const scrambleDurationInMilliseconds = 400;

function randomCharacter() {
  return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
}

type ScrambleTextProps = {
  text: string;
};

export default function ScrambleText({ text }: ScrambleTextProps) {
  const { isMotionEnabled } = useMotion();
  const textRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const overlayElement = overlayRef.current;
    // Listening on the surrounding link or button lets its whole hit area trigger the effect.
    const triggerElement = textElement?.closest("a, button");
    if (!isMotionEnabled || !textElement || !overlayElement || !triggerElement) {
      return;
    }

    let frameId = 0;

    const settle = () => {
      cancelAnimationFrame(frameId);
      overlayElement.textContent = "";
      textElement.classList.remove("opacity-0");
    };

    const scramble = () => {
      cancelAnimationFrame(frameId);
      const startTime = performance.now();
      // The real text stays in the DOM, so the accessible name and width never change.
      textElement.classList.add("opacity-0");

      const renderFrame = (now: number) => {
        const progress = Math.min((now - startTime) / scrambleDurationInMilliseconds, 1);
        const settledLength = Math.floor(progress * text.length);

        overlayElement.textContent = Array.from(text, (character, index) =>
          index < settledLength || character === " " ? character : randomCharacter(),
        ).join("");

        if (progress < 1) {
          frameId = requestAnimationFrame(renderFrame);
        } else {
          settle();
        }
      };

      frameId = requestAnimationFrame(renderFrame);
    };

    // Mouse clicks also focus the link; only keyboard focus should replay the effect.
    const handleFocus = () => {
      if (triggerElement.matches(":focus-visible")) {
        scramble();
      }
    };

    triggerElement.addEventListener("pointerenter", scramble);
    triggerElement.addEventListener("focus", handleFocus);

    return () => {
      triggerElement.removeEventListener("pointerenter", scramble);
      triggerElement.removeEventListener("focus", handleFocus);
      settle();
    };
  }, [isMotionEnabled, text]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span ref={textRef}>{text}</span>
      <span
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      />
    </span>
  );
}
