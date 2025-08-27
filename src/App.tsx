import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/Header";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6">
          <Home />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
