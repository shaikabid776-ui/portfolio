import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { colorTransition, focusRing, monoLabel } from "@/components/ui/styles";
import { hero, profile } from "@/data/content";

const entranceStagger = 0.1;

export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col">
      <Container className="flex flex-1 flex-col pt-32 pb-8">
        <div className="flex flex-1 flex-col justify-center">
          <Reveal>
            <p className={`flex items-center gap-3 text-muted ${monoLabel}`}>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {hero.kicker}
            </p>
          </Reveal>

          {/* The name renders as-is, so it is visible without JavaScript and is not delayed as the largest paint. */}
          <h1 className="mt-8 font-serif text-[clamp(3.5rem,12vw,8.75rem)] leading-[0.9] tracking-tight">
            {hero.firstName} <em>{hero.lastName}</em>
          </h1>

          <Reveal delay={entranceStagger}>
            <p className="mt-8 max-w-[520px] text-lg text-muted">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={entranceStagger * 2} className="mt-10 flex flex-wrap items-center gap-8">
            <Button href={`#${hero.primaryAction.sectionId}`}>
              {hero.primaryAction.label}
              <ArrowDown
                aria-hidden="true"
                className={`size-4 group-hover:text-accent ${colorTransition}`}
              />
            </Button>

            <a
              href={`#${hero.secondaryAction.sectionId}`}
              className={`group inline-flex items-center gap-2 text-sm text-muted hover:text-fg ${colorTransition} ${focusRing}`}
            >
              {hero.secondaryAction.label}
              <ArrowUpRight
                aria-hidden="true"
                className={`size-4 group-hover:text-accent ${colorTransition}`}
              />
            </a>
          </Reveal>
        </div>

        <div className={`flex items-center justify-between text-muted ${monoLabel}`}>
          <p>{hero.scrollHint}</p>
          <p>
            {hero.basedInLabel} {profile.location}
          </p>
        </div>
      </Container>
    </section>
  );
}
