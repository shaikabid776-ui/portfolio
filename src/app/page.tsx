import Container from "@/components/ui/Container";
import { navigation } from "@/data/content";

export default function Home() {
  return (
    <main className="flex-1">
      {navigation.links.map((link) => (
        <section
          key={link.sectionId}
          id={link.sectionId}
          className="min-h-screen border-t border-line"
        >
          <Container />
        </section>
      ))}
    </main>
  );
}
