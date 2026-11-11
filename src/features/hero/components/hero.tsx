import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UnderlineLink } from "@/components/underline-link";
import { CareerTimeline } from "@/features/hero/components/career-timeline";
import { EngineerCard } from "@/features/hero/components/engineer-card";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 pt-9 pb-12 lg:py-16 lg:-mt-20 min-h-[calc(100svh-5rem)] lg:min-h-svh flex flex-col justify-center lg:flex-row lg:items-center gap-10 lg:gap-20"
    >
      <div className="flex-1 flex flex-col gap-[22px] lg:gap-7">
        <div className="flex flex-col gap-0.5 lg:gap-1">
          <span className="font-hand font-medium text-[28px] lg:text-[34px] text-brand -rotate-3 origin-left inline-block">
            hey there, I&apos;m
          </span>
          <h1 className="m-0 font-display font-semibold text-[44px] lg:text-[60px] leading-none tracking-[-0.035em]">
            Simon Manzler
          </h1>
        </div>
        <p className="m-0 max-w-[480px] font-display font-medium text-lg lg:text-[22px] leading-[1.35] tracking-[-0.015em] text-foreground">
          Full-stack developer who builds modern, user-friendly web and mobile
          apps.
        </p>
        <CareerTimeline />
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-7 pt-1 lg:pt-2">
          <Button asChild size="pill">
            <a href="#projects">
              See my work
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <UnderlineLink
            href="mailto:simanzler@gmail.com"
            className="justify-center"
          >
            Get in touch
          </UnderlineLink>
        </div>
      </div>

      <div className="w-full max-w-[420px] lg:max-w-[600px] mx-auto lg:mx-0 lg:flex-[0_0_600px] flex flex-col">
        <div className="relative self-end w-[270px] h-[340px] lg:w-[400px] lg:h-[500px] rounded-3xl lg:rounded-[28px] overflow-hidden bg-well">
          <img
            src="/simon.webp"
            alt="Portrait of Simon Manzler"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <EngineerCard className="relative self-start -mt-8 lg:-mt-12 w-[300px] lg:w-[440px]" />
      </div>
    </section>
  );
}
