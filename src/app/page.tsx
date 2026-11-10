import About from "@/features/about/components/about";
import Contact from "@/features/contact/components/contact";
import Hero from "@/features/hero/components/hero";
import Projects from "@/features/projects/components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <div className="max-w-3xl mx-auto px-6">
        <Contact />
      </div>
    </>
  );
}
