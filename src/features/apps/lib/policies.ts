import { notFound } from "@tanstack/react-router";
import { getProjectBySlug   } from "@/lib/projects";
import type {Policy, Project} from "@/lib/projects";

export type PolicyType = "privacy" | "terms" | "accountDeletion";

type PolicyDispatch = {
  title: string;
  fileName: string;
  /** Route segment under /apps/$slug. */
  segment: string;
  get: (project: Project) => Policy | undefined;
};

export const policyTypes: Record<PolicyType, PolicyDispatch> = {
  privacy: {
    title: "Privacy Policy",
    fileName: "PRIVACY.md",
    segment: "privacy",
    get: (project) => project.privacyPolicy,
  },
  terms: {
    title: "Terms of Service",
    fileName: "TERMS.md",
    segment: "terms",
    get: (project) => project.termsOfService,
  },
  accountDeletion: {
    title: "Delete Your Account",
    fileName: "DELETE_ACCOUNT.md",
    segment: "delete-account",
    get: (project) => project.accountDeletion,
  },
};

/** Policies that the project has, in registry order. */
export function projectPolicies(project: Project) {
  return Object.values(policyTypes)
    .filter((type) => type.get(project))
    .map(({ title, fileName, segment }) => ({
      title,
      fileName,
      href: `/apps/${project.slug}/${segment}`,
    }));
}

/** Get the app and its policy for a route loader, or throw a not-found error. */
export function loadPolicy(type: PolicyType, slug: string) {
  const app = getProjectBySlug(slug);
  const policy = app && policyTypes[type].get(app);
  if (!app || !policy) throw notFound();
  return { app, policy };
}

export function policyMarkdown(title: string, policy: Policy) {
  const lines = [`# ${title}`];
  if (policy.lastUpdated) lines.push("", `Last updated: ${policy.lastUpdated}`);
  for (const section of policy.sections) {
    lines.push("", `## ${section.title}`);
    for (const content of section.content) {
      lines.push(
        "",
        ...(typeof content === "string" ? [content] : content.map((item) => `- ${item}`))
      );
    }
  }
  return lines.join("\n");
}
