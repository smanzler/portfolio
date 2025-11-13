import { useEffect } from "react";
import About from "../sections/about";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import Contact from "../sections/contact";
import { useLocation } from "react-router";

const Root = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.id) {
      document.getElementById(state.id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [state?.id]);

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Root;
