import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/content";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
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
