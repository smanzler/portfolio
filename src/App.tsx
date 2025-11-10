import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Hero } from "./components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { HashRouter, Route, Routes, useLocation } from "react-router";
import ProjectDetails from "./components/pages/project-details";
import { useEffect } from "react";
import Apps from "./components/pages/apps";
import AppDetails from "./components/pages/app-details";

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
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/apps/:id" element={<AppDetails />} />
              </Routes>
            </div>
          </main>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
