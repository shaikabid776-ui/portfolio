import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { focusRing } from "@/components/ui/focusRing";
import { hero, profile } from "@/data/content";

const entranceStagger = 0.1;

export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col">
      <Container className="flex flex-1 flex-col pt-32 pb-8">
        <div className="flex flex-1 flex-col justify-center">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {hero.kicker}
            </p>
          </Reveal>

          <Reveal delay={entranceStagger}>
            <h1 className="mt-8 font-serif text-[clamp(3.5rem,12vw,8.75rem)] leading-[0.9] tracking-tight">
              {hero.firstName} <em>{hero.lastName}</em>
            </h1>
          </Reveal>

          <Reveal delay={entranceStagger * 2}>
            <p className="mt-8 max-w-[520px] text-lg text-muted">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={entranceStagger * 3} className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href={`#${hero.primaryAction.sectionId}`}
              className={`group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent motion-off:transition-none ${focusRing}`}
            >
              {hero.primaryAction.label}
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-colors group-hover:text-accent motion-off:transition-none"
              />
            </a>

            <a
              href={`#${hero.secondaryAction.sectionId}`}
              className={`group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg motion-off:transition-none ${focusRing}`}
            >
              {hero.secondaryAction.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-colors group-hover:text-accent motion-off:transition-none"
              />
            </a>
          </Reveal>
        </div>

        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
          <p>{hero.scrollHint}</p>
          <p>{hero.basedIn}</p>
        </div>
      </Container>
    </section>
  );
}
