import WorkAreaAccordion from "@/components/WorkAreaAccordion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import { howIWork } from "@/data/content";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="border-t border-line py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <SectionLabel index={howIWork.index} label={howIWork.label} />
          <SectionHeading heading={howIWork.heading} />
          <p className="mt-6 text-lg text-muted">{howIWork.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <WorkAreaAccordion areas={howIWork.areas} />
        </Reveal>
      </Container>
    </section>
  );
}
