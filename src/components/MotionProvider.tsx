"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";
import { motionStorageKey } from "@/components/motionPreference";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  listeners.add(onChange);
  mediaQuery.addEventListener("change", onChange);

  return () => {
    listeners.delete(onChange);
    mediaQuery.removeEventListener("change", onChange);
  };
}

// The attribute on <html> is the single source of truth: the head script sets it
// from storage, and it still holds the choice when storage is unavailable.
function getIsMotionEnabled() {
  const choice = document.documentElement.dataset.motion;
  if (choice) {
    return choice === "on";
  }
  return !window.matchMedia(reducedMotionQuery).matches;
}

// The server cannot know the preference; React swaps in the real value after hydration.
function getServerIsMotionEnabled() {
  return true;
}

function setIsMotionEnabled(isEnabled: boolean) {
  const choice = isEnabled ? "on" : "off";
  document.documentElement.dataset.motion = choice;

  try {
    localStorage.setItem(motionStorageKey, choice);
  } catch {
    // Storage can be blocked (private mode, strict settings); the choice still lasts for this visit.
  }

  for (const listener of listeners) {
    listener();
  }
}

type MotionContextValue = {
  isMotionEnabled: boolean;
  toggleMotion: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

type MotionProviderProps = {
  children: React.ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const isMotionEnabled = useSyncExternalStore(
    subscribe,
    getIsMotionEnabled,
    getServerIsMotionEnabled,
  );

  const value: MotionContextValue = {
    isMotionEnabled,
    toggleMotion: () => setIsMotionEnabled(!isMotionEnabled),
  };

  return (
    <MotionContext value={value}>
      <MotionConfig reducedMotion={isMotionEnabled ? "never" : "always"}>
        {children}
      </MotionConfig>
    </MotionContext>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used inside MotionProvider");
  }
  return context;
}
