import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ProjectDetails from "./components/pages/project-details";
import Apps from "./components/pages/apps";
import AppDetails from "./components/pages/app-details";
import { Footer } from "./components/footer";
import Policy from "./components/pages/policy";
import ProjectsPage from "./components/pages/projects-page";
import Root from "./components/pages/root";
import { useEffect, useState } from "react";
import { ShimmeringText } from "./components/ui/shimmering-text";
import { motion } from "motion/react";
import { usePreloadAssets } from "./hooks/usePreloadAssets";

function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const { isLoading: assetsLoading } = usePreloadAssets();

  useEffect(() => {
    if (!isRootPath) {
      setLoading(false);
      return;
    }

    const minLoadingDuration = 1500;
    const startTime = Date.now();

    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingDuration - elapsedTime);

      if (!assetsLoading) {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setLoading(false);
          }, 600);
        }, remainingTime);
      }
    };

    if (!assetsLoading) {
      checkLoadingComplete();
    }
  }, [isRootPath, assetsLoading]);

  if (loading) {
    return (
      <div className="min-h-dvh bg-background container mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isExiting ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
          transition={{ duration: isExiting ? 0.6 : 0.8, ease: "easeInOut" }}
        >
          <ShimmeringText
            text="Loading..."
            duration={1}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background container mx-auto px-4">
      <div className="mx-auto max-w-4xl">
        <Header />
        <main className="py-20">
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/projects" element={<ProjectsPage />} />
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
    <ThemeProvider>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
