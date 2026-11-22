"use client";

import { motionToggle } from "@/data/content";
import { useMotion } from "@/components/MotionProvider";
import { focusRing } from "@/components/ui/focusRing";

export default function MotionToggle() {
  const { isMotionEnabled, toggleMotion } = useMotion();

  return (
    <button
      type="button"
      onClick={toggleMotion}
      className={`fixed right-4 bottom-4 z-50 rounded-full border border-line bg-bg/70 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted backdrop-blur-md transition-colors hover:text-fg motion-off:transition-none ${focusRing}`}
    >
      {isMotionEnabled ? motionToggle.onLabel : motionToggle.offLabel}
    </button>
  );
}
