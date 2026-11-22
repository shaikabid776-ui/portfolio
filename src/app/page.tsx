import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Journey from "@/components/Journey";
import { mainContentId } from "@/components/SkipLink";
import Stats from "@/components/Stats";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <main id={mainContentId} className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Journey />
        <HowIWork />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
