import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects, type Policy, type Project } from "@/lib/projects";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { LegalLinks } from "@/features/apps/components/legal-links";
import { PolicyCard } from "@/features/apps/components/policy-card";
import { policyTypes, type PolicyType } from "@/features/apps/lib/policies";

export default function PolicyScreen({
  app,
  type,
  policy,
}: {
  app: Project;
  type: PolicyType;
  policy: Policy;
}) {
  const { title, fileName, segment } = policyTypes[type];

  return (
    <PageShell>
      <PageHeader
        back={{ href: `/apps/${app.slug}`, label: `${app.slug}/` }}
        eyebrow={`${app.title.toUpperCase()} / LEGAL`}
        title={title}
      />
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
        <div className="lg:flex-[0_0_280px] lg:sticky lg:top-[100px]">
          <LegalLinks app={app} current={`/apps/${app.slug}/${segment}`} />
        </div>
        <div className="flex-1 min-w-0">
          <PolicyCard title={title} fileName={fileName} policy={policy} />
        </div>
      </div>
    </PageShell>
  );
}

export function policyStaticParams(type: PolicyType) {
  return getProjects()
    .filter((project) => project.isApp && policyTypes[type].get(project))
    .map(({ slug }) => ({ slug }));
}

/** Loads the app and the policy for a route, or shows the 404 page. */
export async function PolicyRoute({
  type,
  params,
}: {
  type: PolicyType;
  params: Promise<{ slug: string }>;
}) {
  const app = getProjectBySlug((await params).slug);
  const policy = app && policyTypes[type].get(app);
  if (!app || !policy) notFound();

  return <PolicyScreen app={app} type={type} policy={policy} />;
}
