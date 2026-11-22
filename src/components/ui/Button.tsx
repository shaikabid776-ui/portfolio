import { colorTransition, focusRing } from "@/components/ui/styles";

const sizeClassNames = {
  small: "gap-1.5 px-4 py-2",
  medium: "gap-2 px-5 py-3",
};

type ButtonProps = React.ComponentProps<"a"> & {
  size?: keyof typeof sizeClassNames;
};

// Every pill on the site navigates somewhere, so this is a link styled as a button.
export default function Button({ size = "medium", className = "", ...linkProps }: ButtonProps) {
  return (
    <a
      className={`group inline-flex items-center rounded-full border border-line text-sm hover:border-accent ${colorTransition} ${sizeClassNames[size]} ${focusRing} ${className}`}
      {...linkProps}
    />
  );
}
