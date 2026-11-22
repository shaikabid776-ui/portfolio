"use client";

import { motionToggle } from "@/data/content";
import { useMotion } from "@/components/MotionProvider";
import { colorTransition, focusRing, monoLabel } from "@/components/ui/styles";

export default function MotionToggle() {
  const { isMotionEnabled, toggleMotion } = useMotion();

  return (
    <button
      type="button"
      aria-pressed={isMotionEnabled}
      onClick={toggleMotion}
      className={`fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full border border-line bg-bg/70 px-4 py-2 text-muted backdrop-blur-md hover:text-fg ${monoLabel} ${colorTransition} ${focusRing}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${isMotionEnabled ? "bg-accent" : "bg-muted/40"}`}
      />
      {motionToggle.label}
    </button>
  );
}
