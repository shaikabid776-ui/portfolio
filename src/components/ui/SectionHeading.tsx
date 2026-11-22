import type { SectionHeadingContent } from "@/data/content";

type SectionHeadingProps = {
  heading: SectionHeadingContent;
};

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
      {heading.lead}
      <em className="block">{heading.emphasis}</em>
    </h2>
  );
}
