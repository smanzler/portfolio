import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Home } from "@/components/sections/Home";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BrowserRouter, Route, Routes } from "react-router";
import ProjectDetails from "./components/pages/project-details";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <BrowserRouter>
              <Routes>
                <Route
                  path="/portfolio/"
                  element={
                    <>
                      <Home />
                      <Projects />
                      <About />
                      <Contact />
                    </>
                  }
                />
                <Route
                  path="/portfolio/projects/:id"
                  element={<ProjectDetails />}
                />
              </Routes>
            </BrowserRouter>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
