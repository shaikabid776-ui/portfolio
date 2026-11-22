"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { useMotion } from "@/components/MotionProvider";
import { focusRing } from "@/components/ui/focusRing";
import type { WorkArea } from "@/data/content";

type WorkAreaAccordionProps = {
  areas: WorkArea[];
};

export default function WorkAreaAccordion({ areas }: WorkAreaAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accordionId = useId();

  function toggle(index: number) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <div className="border-t border-line">
      {areas.map((area, index) => (
        <AccordionItem
          key={area.title}
          area={area}
          number={String(index + 1).padStart(2, "0")}
          idPrefix={`${accordionId}-${index}`}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

type AccordionItemProps = {
  area: WorkArea;
  number: string;
  idPrefix: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ area, number, idPrefix, isOpen, onToggle }: AccordionItemProps) {
  const { isMotionEnabled } = useMotion();
  const buttonId = `${idPrefix}-button`;
  const panelId = `${idPrefix}-panel`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center gap-6 py-6 text-left ${focusRing}`}
        >
          {/* Fixed width plus the gap equals the panel's left padding, aligning the text with the title. */}
          <span className="w-6 font-mono text-xs text-muted">{number}</span>
          <span className="flex-1 font-serif text-2xl md:text-3xl">{area.title}</span>
          <Plus
            aria-hidden="true"
            className={`size-5 shrink-0 text-muted transition-transform duration-300 motion-off:transition-none ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </button>
      </h3>

      {/* Skipping the mount animation keeps the default-open item static on first load. */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              isMotionEnabled ? { duration: 0.3, ease: "easeOut" } : { duration: 0 }
            }
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12">
              <p className="text-muted">{area.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-line px-3 py-1 text-xs">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
