import { AnimateOnThreshold } from "../motion/animate-on-threshold";
import { ThresholdContainer } from "../motion/threshold-container";
import ThresholdMotionDiv from "../motion/threshold-motion-div";
import { H1, Lead } from "../ui/typography";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React / Next.js", icon: "devicon:react" },
    { name: "TypeScript", icon: "devicon:typescript" },
    { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    { name: "HTML5 / CSS3", icon: "devicon:html5" },
    { name: "Zustand", icon: "devicon:zustand" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "Python", icon: "devicon:python" },
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "Docker", icon: "devicon:docker" },
    { name: "Supabase", icon: "devicon:supabase" },
    { name: "Expo", icon: "devicon:expo" },
    { name: "React Native", icon: "devicon:reactnative" },
    { name: ".NET", icon: "logos:dotnet" },
    { name: "C#", icon: "devicon:csharp" },
    { name: "Swift", icon: "devicon:swift" },
  ];

  return (
    <section id="skills" className="min-h-screen py-40 flex flex-col gap-6">
      <ThresholdMotionDiv>
        <H1>Skills</H1>
        <Lead>Tools and tech I use most.</Lead>
      </ThresholdMotionDiv>

      <ThresholdContainer className="flex flex-wrap justify-center gap-4">
        {(isPast) =>
          skills.map((skill, index) => (
            <AnimateOnThreshold
              key={index}
              shouldAnimate={isPast}
              delay={0.03 * index}
              className="w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2*1rem)/3)] lg:w-[calc((100%-4*1rem)/5)]"
            >
              <motion.div
                className="flex flex-col items-center justify-center gap-2 bg-card rounded-lg p-4"
                whileHover={{
                  x: 8,
                  y: -8,
                  boxShadow: "-8px 8px 0 0 #ff7300",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <Icon icon={skill.icon} className="w-10 h-10" />
                <p>{skill.name}</p>
              </motion.div>
            </AnimateOnThreshold>
          ))
        }
      </ThresholdContainer>
    </section>
  );
};

export default Skills;
