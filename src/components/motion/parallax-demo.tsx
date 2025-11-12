import { StickyParallaxSection } from "@/components/motion/sticky-parallax-section";
import { motion } from "framer-motion";

/**
 * ParallaxDemo - Demonstration of multiple stacked StickyParallaxSection components
 *
 * This demo shows how multiple scroll-driven parallax sections work together
 * to create a continuous, immersive scrolling experience.
 *
 * Performance Notes:
 * - Each section independently tracks its own scroll progress
 * - Framer Motion's motion values update without triggering React re-renders
 * - useScroll efficiently shares a single scroll listener across all sections
 * - 10-20 sections will maintain 60fps on modern devices
 *
 * How it works:
 * 1. Each section uses useScroll with its own ref to track scroll progress
 * 2. useTransform creates derived animation values from scroll progress
 * 3. Motion values update directly (no React state changes)
 * 4. Parallax is achieved by different transform speeds per layer
 */
const ParallaxDemo = () => {
  return (
    <div className="relative">
      {/* Hero/Intro Section */}
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold"
          >
            Scroll-Driven Parallax
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Scroll down to experience smooth, performant scroll-driven
            animations with multiple parallax layers
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-2 mt-8"
          >
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Parallax Section 1 - Technology Focus */}
      <StickyParallaxSection
        title="Innovation"
        content="Experience the power of scroll-driven animations. Each layer moves at a different speed, creating depth and immersion."
        backgroundColor="bg-slate-950 text-white"
      />

      {/* Parallax Section 2 - Design Focus */}
      <StickyParallaxSection
        title="Design"
        content="Beautiful parallax effects that respond to your scroll. Watch how the background, midground, and foreground layers create a sense of depth."
        backgroundColor="bg-blue-950 text-white"
      />

      {/* Parallax Section 3 - Custom Children Example */}
      <StickyParallaxSection backgroundColor="bg-purple-950 text-white">
        <div className="text-center space-y-8 px-6">
          <h2 className="text-5xl md:text-7xl font-bold">Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-primary">60fps</div>
              <div className="text-sm text-muted-foreground mt-2">
                Smooth animations
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground mt-2">
                Re-renders on scroll
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-primary">10-20</div>
              <div className="text-sm text-muted-foreground mt-2">
                Sections supported
              </div>
            </motion.div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with Framer Motion's motion values for maximum performance.
            Each section independently tracks scroll progress without impacting
            others.
          </p>
        </div>
      </StickyParallaxSection>

      {/* Parallax Section 4 - Experience Focus */}
      <StickyParallaxSection
        title="Experience"
        content="As you scroll through each section, notice how different layers move at different speeds. This creates a natural sense of depth and makes the content feel alive."
        backgroundColor="bg-indigo-950 text-white"
      />

      {/* Parallax Section 5 - Technology Stack */}
      <StickyParallaxSection backgroundColor="bg-emerald-950 text-white">
        <div className="text-center space-y-8 px-6">
          <h2 className="text-5xl md:text-7xl font-bold">Built With</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "React 19",
              "TypeScript",
              "Framer Motion",
              "useScroll",
              "useTransform",
              "Motion Values",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            Leveraging the latest React and Framer Motion features for
            buttery-smooth scroll-driven animations.
          </p>
        </div>
      </StickyParallaxSection>

      {/* Final Section - Call to Action */}
      <StickyParallaxSection
        title="Keep Scrolling"
        content="Each section is completely independent and reusable. Add as many as you need - the performance stays smooth thanks to Framer Motion's optimized architecture."
        backgroundColor="bg-slate-900 text-white"
      />

      {/* End Section */}
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            The End
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Scroll back up to see the animations in reverse!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-2 mt-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary"
            >
              ↑
            </motion.div>
            <span className="text-sm text-muted-foreground">
              Scroll back up
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDemo;
