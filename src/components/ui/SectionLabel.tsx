import { monoLabel } from "@/components/ui/styles";

type SectionLabelProps = {
  index: string;
  label: string;
};

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className={`flex items-center gap-3 text-muted ${monoLabel}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {index} / {label}
    </p>
  );
}
