import About from "@/components/About";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Journey from "@/components/Journey";
import Stats from "@/components/Stats";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <About />
      <Journey />
      <HowIWork />
      <Work />
      <section id="contact" className="min-h-screen border-t border-line" />
    </main>
  );
}
