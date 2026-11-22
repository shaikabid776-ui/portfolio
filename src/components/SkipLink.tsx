import { focusRing } from "@/components/ui/styles";
import { navigation } from "@/data/content";

export const mainContentId = "main-content";

export default function SkipLink() {
  return (
    <a
      href={`#${mainContentId}`}
      className={`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:border focus:border-line focus:bg-bg focus:px-4 focus:py-2 focus:text-sm ${focusRing}`}
    >
      {navigation.skipLinkLabel}
    </a>
  );
}
