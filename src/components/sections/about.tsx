import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import resume from "@/assets/resume.pdf";
import { DownloadIcon } from "lucide-react";
import { H1, H3, H4, Lead, Muted, P } from "../ui/typography";
import ThresholdMotionDiv from "../motion/threshold-motion-div";
import { ThresholdContainer } from "../motion/threshold-container";
import { AnimateOnThreshold } from "../motion/animate-on-threshold";

export function About() {
  const frontendSkills = [
    "React / Next.js",
    "TypeScript",
    "TailwindCSS",
    "HTML5 / CSS3",
    "Redux / Zustand",
    "React Query",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 min-h-screen">
      <ThresholdMotionDiv className="mb-12">
        <H1>About Me</H1>
        <Lead>Here is some information about me and my skills.</Lead>
      </ThresholdMotionDiv>

      <div className="grid gap-8 md:grid-cols-2">
        <ThresholdContainer threshold={0.2} className="flex flex-col gap-6">
          {(isPast) => (
            <>
              <AnimateOnThreshold shouldAnimate={isPast} delay={0.1}>
                <H3>Hi, I'm Simon</H3>
                <P className="!text-muted-foreground">
                  a full-stack software developer who enjoys building practical,
                  reliable apps that people actually use.
                </P>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.2}>
                <H3>Experience</H3>
                <P className="!text-muted-foreground">
                  I've completed three internships and worked on projects
                  ranging from enterprise C# APIs in financial services to a
                  React Native workout app published on the App Store. My focus
                  is on creating smooth, user-friendly experiences backed by
                  solid, maintainable code.
                </P>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.3}>
                <H3>Technical Focus</H3>
                <P className="!text-muted-foreground">
                  I like working across the stack — designing databases, writing
                  clean APIs, and building responsive interfaces with React and
                  React Native. Lately, I've been using Supabase and PostgreSQL
                  for cloud-based apps, and WatermelonDB for offline-first
                  mobile development.
                </P>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.4}>
                <H3>Beyond Code</H3>
                <P className="!text-muted-foreground">
                  Outside of coding, I enjoy music, art, and exploring new tech
                  ideas — often blending them into creative side projects.
                </P>
              </AnimateOnThreshold>
            </>
          )}
        </ThresholdContainer>

        <ThresholdContainer threshold={0.2} className="flex flex-col gap-6">
          {(isPast) => (
            <>
              <AnimateOnThreshold shouldAnimate={isPast} delay={0.1}>
                <div>
                  <H3>Technical Skills</H3>
                  <Muted>
                    A comprehensive set of skills across the full stack
                  </Muted>
                </div>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.2}>
                <div>
                  <H4>Frontend Development</H4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <AnimateOnThreshold
                        key={skill}
                        shouldAnimate={isPast}
                        delay={0.3 + index * 0.05}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </AnimateOnThreshold>
                    ))}
                  </div>
                </div>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.5}>
                <div>
                  <H4>Backend Development</H4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <AnimateOnThreshold
                        key={skill}
                        shouldAnimate={isPast}
                        delay={0.6 + index * 0.05}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="outline">{skill}</Badge>
                      </AnimateOnThreshold>
                    ))}
                  </div>
                </div>
              </AnimateOnThreshold>

              <AnimateOnThreshold shouldAnimate={isPast} delay={0.8}>
                <Button
                  onClick={() => window.open(resume, "_blank")}
                  className="w-full"
                >
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </AnimateOnThreshold>
            </>
          )}
        </ThresholdContainer>
      </div>
    </section>
  );
}
