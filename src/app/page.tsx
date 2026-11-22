import About from "@/components/About";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <About />
      <Journey />
      <section id="work" className="min-h-screen border-t border-line" />
      <section id="contact" className="min-h-screen border-t border-line" />
    </main>
  );
}
