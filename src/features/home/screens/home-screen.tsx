import About from "@/features/about/components/about";
import Contact from "@/features/contact/components/contact";
import Experience from "@/features/experience/components/experience";
import Hero from "@/features/hero/components/hero";
import Projects from "@/features/projects/components/projects";

export default function HomeScreen() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
