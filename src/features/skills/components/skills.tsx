"use client";

import AccentShadowContainer from "@/components/accent-shadow-container";
import { AnimateOnThreshold } from "@/components/animate-on-threshold";
import { ThresholdContainer } from "@/components/threshold-container";
import ThresholdMotionDiv from "@/components/threshold-motion-div";
import { H1, Lead, Muted } from "@/components/ui/typography";
import { Icon } from "@iconify/react";
import { skills } from "@/features/skills/lib/skills";

const Skills = () => {
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
              <AccentShadowContainer className="flex flex-col items-center justify-center gap-2 bg-card rounded-lg p-4">
                <Icon icon={skill.icon} className="w-10 h-10" />
                <Muted>{skill.name}</Muted>
              </AccentShadowContainer>
            </AnimateOnThreshold>
          ))
        }
      </ThresholdContainer>
    </section>
  );
};

export default Skills;
