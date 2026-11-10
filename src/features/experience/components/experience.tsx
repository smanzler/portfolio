import { ArrowUpRight } from "lucide-react";
import { ChangelogCard } from "@/features/experience/components/changelog-card";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 py-24 lg:py-[120px] flex flex-col gap-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
            03 / EXPERIENCE
          </span>
          <h2 className="m-0 font-display font-semibold text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
            Where I&apos;ve worked
          </h2>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 font-medium py-3"
        >
          <span className="border-b-[1.5px] border-foreground pb-0.5">
            Full résumé
          </span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <ChangelogCard />
    </section>
  );
}
