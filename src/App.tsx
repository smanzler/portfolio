import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Hero } from "./components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ProjectDetails from "./components/pages/project-details";
import { useEffect } from "react";

function Root() {
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
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <Routes>
                <Route path="/portfolio/" element={<Root />} />
                <Route
                  path="/portfolio/projects/:id"
                  element={<ProjectDetails />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
