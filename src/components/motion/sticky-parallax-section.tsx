import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StickyParallaxSectionProps {
  /** Optional title displayed in the section */
  title?: string;
  /** Optional text content */
  content?: string;
  /** Custom children to render instead of default layout */
  children?: ReactNode;
  /** Optional className for styling */
  className?: string;
  /** Background color class (default: "bg-background") */
  backgroundColor?: string;
}

/**
 * StickyParallaxSection - A scroll-driven parallax section component
 *
 * This component creates a full-viewport sticky section where internal layers animate
 * based on scroll progress through the section. The section stays fixed in place
 * while the user scrolls, creating an immersive parallax effect.
 *
 * Key Features:
 * - Section uses position: sticky to remain fixed during scroll
 * - Scroll progress is tracked relative to a container element
 * - useTransform maps scroll progress (0-1) to animation values
 * - Multiple layers with different animation speeds create parallax depth
 * - Efficient: motion values don't trigger React re-renders
 *
 * @example
 * <StickyParallaxSection
 *   title="Section 1"
 *   content="This is the first parallax section."
 *   backgroundColor="bg-slate-900"
 * />
 */
export const StickyParallaxSection = ({
  title,
  content,
  children,
  className,
  backgroundColor = "bg-background",
}: StickyParallaxSectionProps) => {
  // Ref to the outer container that provides scroll range
  // This container is 200vh tall, giving us scroll range for the sticky section
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the container
  // As the container scrolls through the viewport, scrollYProgress goes from 0 to 1
  // offset: ["start start", "end end"] means:
  //   - progress = 0 when container start hits viewport start (top)
  //   - progress = 1 when container end hits viewport end (bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress into animation values
  // These create different animation speeds for parallax layers

  // Background layer: moves slowly upward (creates depth)
  // As scroll progresses 0→1, background moves from 0 to -200px
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Midground layer: moves at medium speed
  // Creates the middle depth layer
  const midgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Foreground layer: moves fastest (closest to viewer)
  // As scroll progresses, foreground moves more dramatically
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Opacity fade: content fades in then out as you scroll through
  // Starts invisible (0), peaks at middle (1), fades out again (0)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );

  // Scale effect: content scales slightly as you scroll
  // Starts small (0.8), grows to normal (1), then shrinks (0.9)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.9]
  );

  // Rotation effect for visual interest
  // Subtle rotation from -2deg to 2deg
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    // Outer container: provides scroll range (200vh = 2x viewport height)
    // This gives us scrollable space for the sticky section to animate through
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky section: stays fixed while animations play based on scroll */}
      <div
        className={cn(
          // sticky top-0: pins section to top of viewport
          // h-screen: section is full viewport height
          // overflow-hidden: prevents content from spilling out
          "sticky top-0 h-screen w-full overflow-hidden",
          backgroundColor,
          className
        )}
      >
        {/* Background Layer - slowest movement, creates depth */}
        <motion.div
          style={{
            y: backgroundY, // Motion value - updates without re-renders
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.3, 0.6, 0.3]
              ),
            }}
            className="text-[20rem] font-bold text-primary/10 select-none"
          >
            {title?.[0] || "·"}
          </motion.div>
        </motion.div>

        {/* Midground Layer - medium speed movement */}
        <motion.div
          style={{
            y: midgroundY,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Decorative circles that move at mid speed */}
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.3, 0.7, 1],
                [0, 0.5, 0.5, 0]
              ),
              scale: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.5, 1.2, 0.8]
              ),
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
          />
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.3, 0.7, 1],
                [0, 0.5, 0.5, 0]
              ),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.6]),
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"
          />
        </motion.div>

        {/* Foreground Layer - fastest movement, main content */}
        <motion.div
          style={{
            y: foregroundY,
            opacity,
            scale,
            rotate,
          }}
          className="relative h-full flex items-center justify-center z-10"
        >
          {children ? (
            // Custom children if provided
            children
          ) : (
            // Default layout with title and content
            <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
              {title && (
                <motion.h2
                  style={{
                    // Extra animation for title - moves independently
                    y: useTransform(scrollYProgress, [0, 1], [0, -30]),
                  }}
                  className="text-5xl md:text-7xl font-bold"
                >
                  {title}
                </motion.h2>
              )}
              {content && (
                <motion.p
                  style={{
                    // Content moves at slightly different speed than title
                    y: useTransform(scrollYProgress, [0, 1], [0, 20]),
                  }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                  {content}
                </motion.p>
              )}
            </div>
          )}
        </motion.div>

        {/* Scroll progress indicator (optional, for debugging/visual feedback) */}
        <motion.div
          style={{
            scaleX: scrollYProgress, // Progress bar grows as you scroll through section
          }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
        />
      </div>
    </div>
  );
};
