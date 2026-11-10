import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { ProjectReader } from "@/features/projects/components/project-reader";
import { SideProjectsTerminal } from "@/features/projects/components/side-projects-terminal";

export default function Projects() {
  const projects = getProjects();
  const featured = projects.filter((project) => project.featured);
  const sideProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 py-24 lg:py-[120px] flex flex-col gap-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
            01 / SELECTED WORK
          </span>
          <h2 className="m-0 font-display font-semibold text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
            Things I&apos;ve built
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-medium py-3"
        >
          <span className="border-b-[1.5px] border-foreground pb-0.5">
            All projects
          </span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ProjectReader projects={featured} />

      <div className="flex flex-col gap-6 mt-12">
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
              ALSO
            </span>
            <h3 className="m-0 font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.025em]">
              Side projects &amp; experiments
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="hidden sm:inline-block font-hand font-medium text-[26px] text-brand -rotate-3"
          >
            the fun stuff ↓
          </span>
        </div>
        <SideProjectsTerminal projects={sideProjects} />
      </div>
    </section>
  );
}
