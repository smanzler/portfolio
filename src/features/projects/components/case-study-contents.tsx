import type { Project } from "@/lib/projects";
import { caseStudySections } from "@/features/projects/lib/case-study";

export function CaseStudyContents({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const entries = [
    { id: "overview", title: "Overview" },
    ...caseStudySections(project),
    ...(project.assets?.length ? [{ id: "media", title: "Media" }] : []),
  ];

  return (
    <nav aria-label="Case study" className={className}>
      <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
        CONTENTS
      </span>
      <ol className="list-none mt-4 mb-0 p-0 border-t border-border">
        {entries.map(({ id, title }, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="group flex items-baseline gap-4 py-3 border-b border-border text-[#7a7d87] hover:text-foreground transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground group-hover:text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-semibold text-lg tracking-[-0.02em]">
                {title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
