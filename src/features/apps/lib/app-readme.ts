import type { Project } from "@/lib/projects";

export function appParagraphs(app: Project) {
  return (app.longDescription || app.description).split(/\n\n+/);
}

export function appMarkdown(app: Project) {
  return [
    `# ${app.title}`,
    "",
    appParagraphs(app).join("\n\n"),
    "",
    "## Features",
    "",
    ...app.keyFeatures.map((feature) => `- ${feature}`),
  ].join("\n");
}
