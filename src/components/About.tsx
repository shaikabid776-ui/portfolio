import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <SectionLabel index={about.index} label={about.label} />
          <SectionHeading heading={about.heading} />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted">{about.paragraph}</p>
          <Image
            src="/abid.jpg"
            alt={about.photoAlt}
            width={400}
            height={400}
            sizes="320px"
            className="mt-10 w-full max-w-80 rounded-2xl border border-line grayscale transition-[filter] duration-500 hover:grayscale-0 motion-off:transition-none"
          />
        </Reveal>
      </Container>
    </section>
  );
}
