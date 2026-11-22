import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import { journey, type JourneyStep } from "@/data/content";

const stepStagger = 0.1;

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <SectionLabel index={journey.index} label={journey.label} />
          <SectionHeading heading={journey.heading} />
        </Reveal>

        <ol className="border-l border-line">
          {journey.steps.map((step, index) => (
            <li
              key={step.period}
              aria-current={step.isCurrent ? "step" : undefined}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <TimelineDot isCurrent={step.isCurrent} />
              <Reveal delay={index * stepStagger}>
                <TimelineStep step={step} />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function TimelineDot({ isCurrent = false }: { isCurrent?: boolean }) {
  return (
    // Centred on the list's 1px left border.
    <span aria-hidden="true" className="absolute top-1.5 -left-[4.5px] flex size-2">
      {isCurrent && (
        <span className="absolute inset-0 animate-soft-pulse rounded-full bg-accent motion-reduce:animate-none" />
      )}
      <span className={`relative size-2 rounded-full ${isCurrent ? "bg-accent" : "bg-line"}`} />
    </span>
  );
}

function TimelineStep({ step }: { step: JourneyStep }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{step.period}</p>
      <h3 className="mt-2 font-semibold">{step.title}</h3>
      <p className="mt-1 text-muted">{step.description}</p>
    </>
  );
}
