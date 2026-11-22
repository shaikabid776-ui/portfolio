import Container from "@/components/ui/Container";
import { footer, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted md:flex-row md:justify-between">
        <p>
          © <CurrentYear /> {profile.name}
        </p>
        <p>{footer.builtWith}</p>
      </Container>
    </footer>
  );
}

// With cacheComponents enabled, reading the date during prerender must be
// cached; the year is fixed at build time and refreshes on the next deploy.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}
