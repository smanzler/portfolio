import { getProjects } from "@/lib/projects";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { ProjectWorkspace } from "@/features/projects/workspace/components/project-workspace";

export default function ProjectsScreen() {
  return (
    <PageShell>
      <PageHeader
        back={{ href: "/", label: "portfolio/" }}
        eyebrow="ALL PROJECTS"
        title="Everything I've built"
        aside={
          <span
            aria-hidden="true"
            className="hidden sm:inline-block shrink-0 font-hand font-medium text-[26px] text-brand -rotate-3"
          >
            click around ↓
          </span>
        }
      />
      <ProjectWorkspace projects={getProjects()} />
    </PageShell>
  );
}
