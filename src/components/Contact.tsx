import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import Container from "@/components/ui/Container";
import GitHubIcon from "@/components/ui/GitHubIcon";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { focusRing } from "@/components/ui/focusRing";
import { contact, profile } from "@/data/content";

const revealStagger = 0.1;

type ContactLink = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: "true" }>;
  isExternal?: boolean;
  isDownload?: boolean;
};

const contactLinks: ContactLink[] = [
  { href: `mailto:${profile.email}`, label: contact.emailLabel, Icon: Mail },
  { href: profile.linkedin, label: contact.linkedinLabel, Icon: LinkedInIcon, isExternal: true },
  { href: profile.github, label: contact.githubLabel, Icon: GitHubIcon, isExternal: true },
  { href: profile.resume, label: contact.resumeLabel, Icon: FileDown, isDownload: true },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel index={contact.index} label={contact.label} />
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            {contact.heading.lead}
            <em className="block">{contact.heading.emphasis}</em>
          </h2>
          <p className="mt-8 text-lg text-muted">{contact.intro}</p>
        </Reveal>

        <Reveal delay={revealStagger}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <ContactPill link={link} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={revealStagger * 2} className="mt-8">
          <CopyEmailButton />
        </Reveal>
      </Container>
    </section>
  );
}

function ContactPill({ link }: { link: ContactLink }) {
  const { href, label, Icon, isExternal, isDownload } = link;

  return (
    <a
      href={href}
      download={isDownload || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-accent motion-off:transition-none ${focusRing}`}
    >
      <Icon aria-hidden="true" className="size-4" />
      {label}
      <ArrowUpRight aria-hidden="true" className="size-4 text-muted" />
    </a>
  );
}
