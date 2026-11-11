import type { Project } from "@/lib/projects";

export type CaseStudyItem = { term?: string; text: string };

export type CaseStudySection = {
  id: string;
  title: string;
  items: CaseStudyItem[];
};

function bullets(texts: string[] | undefined): CaseStudyItem[] {
  return (texts ?? []).map((text) => ({ text }));
}

export function overviewParagraphs(project: Project) {
  return (project.longDescription || project.description).split(/\n\n+/);
}

/** Sections in page order. Sections with no items are removed. */
export function caseStudySections(project: Project): CaseStudySection[] {
  return [
    { id: "key-features", title: "Key features", items: bullets(project.keyFeatures) },
    {
      id: "technical-highlights",
      title: "Technical highlights",
      items: bullets(project.technicalHighlights),
    },
    {
      id: "challenges",
      title: "Challenges & learnings",
      items: (project.challenges ?? []).map(({ problem, solution }) => ({
        term: problem,
        text: solution,
      })),
    },
    {
      id: "product-decisions",
      title: "Product decisions",
      items: bullets(project.productDecisions),
    },
    { id: "next-steps", title: "Next steps", items: bullets(project.nextSteps) },
  ].filter((section) => section.items.length > 0);
}

export function caseStudyMarkdown(project: Project) {
  const lines = [`# ${project.title}`, "", overviewParagraphs(project).join("\n\n")];
  for (const section of caseStudySections(project)) {
    lines.push(
      "",
      `## ${section.title}`,
      "",
      ...section.items.map(({ term, text }) =>
        term ? `- **${term}** — ${text}` : `- ${text}`
      )
    );
  }
  return lines.join("\n");
}
