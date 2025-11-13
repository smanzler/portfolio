import { useEffect } from "react";
import { About } from "../sections/about1";
import { Hero } from "../sections/hero1";
import { Projects } from "../sections/projects1";
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
