type SectionLabelProps = {
  index: string;
  label: string;
};

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {index} / {label}
    </p>
  );
}
