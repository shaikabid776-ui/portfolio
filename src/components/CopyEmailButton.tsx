"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { colorTransition, focusRing, monoLabel } from "@/components/ui/styles";
import { contact, profile } from "@/data/content";

const copiedDurationInMilliseconds = 2000;

export default function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimerRef.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // The clipboard can be missing (insecure context) or blocked by the
      // browser; the button simply stays in its default state.
      return;
    }

    setIsCopied(true);
    clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(
      () => setIsCopied(false),
      copiedDurationInMilliseconds,
    );
  }

  const Icon = isCopied ? Check : Copy;

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        // Vertical padding with a matching negative margin gives a 40px hit area without moving the layout.
        className={`-my-3 inline-flex items-center gap-2 py-3 text-muted hover:text-accent ${monoLabel} ${colorTransition} ${focusRing}`}
      >
        <Icon aria-hidden="true" className="size-4" />
        {isCopied ? contact.copiedLabel : contact.copyLabel}
      </button>
      <p role="status" aria-live="polite" className="sr-only">
        {isCopied ? contact.copiedAnnouncement : ""}
      </p>
    </>
  );
}
