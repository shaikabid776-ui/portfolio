"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { navigation, profile } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { focusRing } from "@/components/ui/focusRing";

const sectionIds = navigation.links.map((link) => link.sectionId);

export default function Navbar() {
  const activeSectionId = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-[720px]"
    >
      <div className="flex items-center gap-6 rounded-full border border-line bg-bg/70 py-2 pr-2 pl-6 backdrop-blur-md">
        <a href="#top" className={`font-serif text-xl ${focusRing}`}>
          {profile.name}
        </a>

        <nav className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.links.map((link) => {
              const isActive = link.sectionId === activeSectionId;

              return (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative text-sm transition-colors hover:text-fg motion-reduce:transition-none ${
                      isActive ? "text-fg" : "text-muted"
                    } ${focusRing}`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href={`#${navigation.callToAction.sectionId}`}
            className={`group flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent motion-reduce:transition-none ${focusRing}`}
          >
            {navigation.callToAction.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-colors group-hover:text-accent motion-reduce:transition-none"
            />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className={`rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fg motion-reduce:transition-none md:hidden ${focusRing}`}
          >
            {navigation.menuLabel}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        hidden={!isMenuOpen}
        className="mt-2 rounded-3xl border border-line bg-bg/90 p-2 backdrop-blur-md md:hidden"
      >
        <ul>
          {navigation.links.map((link) => {
            const isActive = link.sectionId === activeSectionId;

            return (
              <li key={link.sectionId}>
                <a
                  href={`#${link.sectionId}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors hover:text-fg motion-reduce:transition-none ${
                    isActive ? "text-fg" : "text-muted"
                  } ${focusRing}`}
                >
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full ${isActive ? "bg-accent" : "bg-line"}`}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
