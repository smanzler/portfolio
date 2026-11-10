import Contact from "@/features/contact/components/contact";
import Hero from "@/features/hero/components/hero";
import Projects from "@/features/projects/components/projects";
import Skills from "@/features/skills/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <div className="max-w-3xl mx-auto px-6">
        <Skills />
        <Contact />
      </div>
    </>
  );
}
