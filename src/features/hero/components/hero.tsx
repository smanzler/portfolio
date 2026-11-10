import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnThreshold } from "@/components/animate-on-threshold";
import { EngineerCard } from "@/features/hero/components/engineer-card";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 pt-9 pb-12 lg:py-0 lg:min-h-[760px] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20"
    >
      <AnimateOnThreshold
        shouldAnimate
        delay={0.1}
        className="flex-1 flex flex-col gap-[22px] lg:gap-7"
      >
        <div className="flex flex-col gap-0.5 lg:gap-1">
          <span className="font-hand font-medium text-[28px] lg:text-[34px] text-brand -rotate-3 origin-left inline-block">
            hey there, I&apos;m
          </span>
          <h1 className="m-0 font-display font-semibold text-[46px] lg:text-[68px] leading-none tracking-[-0.035em]">
            Simon Manzler
          </h1>
        </div>
        <p className="m-0 max-w-[500px] font-display font-medium text-xl lg:text-2xl leading-[1.35] tracking-[-0.015em] text-foreground-soft">
          Full-stack developer who builds modern, user-friendly web and mobile
          apps.
        </p>
        <p className="m-0 max-w-[500px] text-base lg:text-[19px] leading-[1.6] text-muted-foreground">
          Currently at Western &amp; Southern Financial Group, building C# /
          .NET APIs for investment systems. Previously Copeland and Total
          Quality Logistics.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-7 pt-1 lg:pt-2">
          <Link
            href="#projects"
            className="flex lg:inline-flex items-center justify-center gap-2.5 h-[52px] lg:h-auto lg:px-7 lg:py-4 rounded-full bg-primary text-primary-foreground font-medium"
          >
            See my work
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href="mailto:simanzler@gmail.com"
            className="flex items-center justify-center h-12 lg:h-auto lg:py-3 font-medium"
          >
            <span className="border-b-[1.5px] border-foreground pb-0.5">
              Get in touch
            </span>
          </a>
        </div>
      </AnimateOnThreshold>

      <AnimateOnThreshold
        shouldAnimate
        delay={0.3}
        className="relative w-full max-w-[600px] h-[480px] lg:h-[640px] lg:flex-[0_0_600px] mt-5 lg:mt-0"
      >
        <div className="absolute top-0 right-0 w-[270px] h-[340px] lg:w-[400px] lg:h-[500px] rounded-3xl lg:rounded-[28px] overflow-hidden bg-well">
          <Image
            src="/simon.jpeg"
            alt="Portrait of Simon Manzler"
            fill
            sizes="(min-width: 1024px) 400px, 270px"
            className="object-cover"
            priority
          />
        </div>
        <EngineerCard className="absolute left-0 bottom-0 w-[300px] lg:w-[440px]" />
      </AnimateOnThreshold>
    </section>
  );
}
