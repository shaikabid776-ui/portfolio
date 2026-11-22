"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { focusRing } from "@/components/ui/focusRing";
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
        className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent motion-off:transition-none ${focusRing}`}
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
