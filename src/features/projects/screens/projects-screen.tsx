import { getProjects } from "@/lib/projects";
import { DirectoryCard } from "@/components/directory-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

export default function ProjectsScreen() {
  const projects = getProjects();

  return (
    <PageShell>
      <PageHeader
        back={{ href: "/", label: "portfolio/" }}
        eyebrow="ALL PROJECTS"
        title="Everything I've built"
        lead="Shipped apps, client work, and side projects. Pick one to read the case study."
      />
      <DirectoryCard
        path={["smanzler", "portfolio", "work/"]}
        entries={projects.map((project) => ({
          href: `/projects/${project.slug}`,
          name: `${project.slug}/`,
          title: project.title,
          description: project.description,
          icon: project.icon,
          tags: project.tags,
          note: project.featured ? "featured" : undefined,
        }))}
      />
    </PageShell>
  );
}
