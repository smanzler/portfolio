import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Hero } from "./components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ProjectDetails from "./components/pages/project-details";
import { useEffect } from "react";
import Apps from "./components/pages/apps";
import AppDetails from "./components/pages/app-details";
import { Footer } from "./components/footer";
import Policy from "./components/pages/policy";

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

function RootLayout() {
  return (
    <div className="min-h-screen bg-background container mx-auto px-4">
      <div className="mx-auto max-w-5xl">
        <Header />
        <main className="py-20">
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id">
              <Route index element={<AppDetails />} />
              <Route path="privacy" element={<Policy type="privacy" />} />
              <Route path="terms" element={<Policy type="terms" />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
