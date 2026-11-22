import type { SectionHeadingContent } from "@/data/content";

const sizeClassNames = {
  medium: "text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
  large: "text-5xl leading-[1] md:text-7xl lg:text-8xl",
};

type SectionHeadingProps = {
  heading: SectionHeadingContent;
  size?: keyof typeof sizeClassNames;
};

export default function SectionHeading({ heading, size = "medium" }: SectionHeadingProps) {
  return (
    <h2 className={`mt-6 font-serif tracking-tight ${sizeClassNames[size]}`}>
      {heading.lead}
      <em className="block">{heading.emphasis}</em>
    </h2>
  );
}
