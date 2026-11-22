import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import GitHubIcon from "@/components/ui/GitHubIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/ui/SectionLabel";
import { colorTransition, focusRing, monoLabel } from "@/components/ui/styles";
import { profile, work, type WorkItem } from "@/data/content";
import { formatIndex } from "@/lib/formatIndex";

const rowStagger = 0.1;

// The negative margin keeps the 40px hit area from shifting the 20px icon out of line.
const iconLinkClassName = `-m-2.5 inline-flex size-10 items-center justify-center text-muted hover:text-accent ${colorTransition} ${focusRing}`;

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal blur className="md:flex md:items-end md:justify-between md:gap-16">
          <div>
            <SectionLabel index={work.index} label={work.label} />
            <SectionHeading heading={work.heading} />
          </div>
          <p className="mt-6 text-lg text-muted md:mt-0">{work.intro}</p>
        </Reveal>

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {work.projects.map((project, index) => (
            <li key={project.title} className="group">
              <Reveal delay={index * rowStagger}>
                <ProjectRow project={project} number={index + 1} />
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-muted">
          {work.note.text}{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-fg underline underline-offset-4 hover:text-accent ${colorTransition} ${focusRing}`}
          >
            {work.note.linkLabel}
          </a>
        </p>
      </Container>
    </section>
  );
}

type ProjectRowProps = {
  project: WorkItem;
  number: number;
};

function ProjectRow({ project, number }: ProjectRowProps) {
  return (
    <div className="grid gap-4 py-10 transition-transform duration-300 ease-out md:grid-cols-[10rem_1fr_auto] md:gap-8 md:group-hover:translate-x-2 motion-off:transition-none motion-off:md:group-hover:translate-x-0">
      <p className={`flex gap-4 text-muted md:flex-col md:gap-2 ${monoLabel}`}>
        <span>{formatIndex(number)}</span>
        <span>{project.category}</span>
      </p>

      <div>
        <h3 className={`font-serif text-3xl leading-tight duration-300 group-hover:text-accent md:text-4xl ${colorTransition}`}>
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-muted">{project.description}</p>
        <p className="mt-4 font-mono text-xs text-muted">{project.tags.join(" · ")}</p>
      </div>

      <ProjectMeta project={project} />
    </div>
  );
}

function ProjectMeta({ project }: { project: WorkItem }) {
  if (project.company) {
    return (
      <p className={`text-muted ${monoLabel}`}>
        {work.companyLabel}
      </p>
    );
  }

  return (
    <div className="flex items-start gap-1">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${work.githubLabel} – ${project.title}`}
          className={iconLinkClassName}
        >
          <GitHubIcon className="size-5" />
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${work.liveLabel} – ${project.title}`}
          className={iconLinkClassName}
        >
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </a>
      )}
    </div>
  );
}
