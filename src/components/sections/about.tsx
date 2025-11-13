import { H1, H3, Lead, P } from "../ui/typography";
import ThresholdMotionDiv from "../motion/threshold-motion-div";
import { ThresholdContainer } from "../motion/threshold-container";
import { AnimateOnThreshold } from "../motion/animate-on-threshold";
import profileImage from "@/assets/simon-ramen.png";

export default function About() {
  return (
    <section id="about" className="py-40 min-h-screen">
      <ThresholdMotionDiv className="mb-12">
        <H1>About Me</H1>
        <Lead>Here is some information about me and my skills.</Lead>
      </ThresholdMotionDiv>

      <ThresholdContainer className="grid gap-8 md:grid-cols-2">
        {(isPast) => (
          <>
            <div className="flex flex-col gap-6">
              <AnimateOnThreshold shouldAnimate={isPast}>
                <img
                  src={profileImage}
                  alt="Simon"
                  className="w-full h-full object-cover shadow-[-8px_8px_0_0_#ff7300]"
                />
              </AnimateOnThreshold>
            </div>

            <div className="flex flex-col gap-6">
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
                  ideas - often blending them into creative side projects.
                </P>
              </AnimateOnThreshold>
            </div>
          </>
        )}
      </ThresholdContainer>
    </section>
  );
}
