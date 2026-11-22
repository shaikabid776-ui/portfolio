"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          } else {
            // Clear the highlight when scrolling above the first section.
            setActiveSectionId((current) =>
              current === entry.target.id ? null : current,
            );
          }
        }
      },
      // Only the section crossing the middle of the viewport counts as active,
      // so two neighbouring sections are never active at the same time.
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
}
