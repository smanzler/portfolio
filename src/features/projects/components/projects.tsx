import { getProjects } from "@/lib/projects";
import { Section } from "@/components/section";
import { UnderlineLink } from "@/components/underline-link";
import { ProjectReader } from "@/features/projects/components/project-reader";
import { SideProjectsTerminal } from "@/features/projects/components/side-projects-terminal";

export default function Projects() {
  const projects = getProjects();
  const featured = projects.filter((project) => project.featured);
  const sideProjects = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      eyebrow="01 / SELECTED WORK"
      title="Things I've built"
      action={
        <UnderlineLink href="/projects" arrow>
          All projects
        </UnderlineLink>
      }
      className="gap-14"
    >
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
    </Section>
  );
}
