import { useEffect } from "react";
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
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
      <About />
    </>
  );
};

export default Root;
