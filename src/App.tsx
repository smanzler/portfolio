import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Simon Manzler</h1>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
