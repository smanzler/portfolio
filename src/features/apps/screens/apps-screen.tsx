import { getProjects } from "@/lib/projects";
import { DirectoryCard } from "@/components/directory-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

export default function AppsScreen() {
  const apps = getProjects().filter((project) => project.isApp);

  return (
    <PageShell>
      <PageHeader
        back={{ href: "/", label: "portfolio/" }}
        eyebrow="APPS"
        title="Mobile apps"
        lead="Apps I've built and shipped. Each has its own page with screenshots, FAQ, and policies."
      />
      <DirectoryCard
        path={["smanzler", "portfolio", "apps/"]}
        entries={apps.map((app) => ({
          href: `/apps/${app.slug}`,
          name: `${app.slug}/`,
          title: app.title,
          description: app.description,
          icon: app.icon,
          tags: app.tags,
          note: app.link ? "on the App Store" : undefined,
        }))}
      />
    </PageShell>
  );
}
