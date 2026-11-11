import type { Project } from "@/lib/projects";
import { MarkdownFileCard } from "@/components/markdown-file-card";
import {
  caseStudyMarkdown,
  caseStudySections,
  overviewParagraphs,
} from "@/features/projects/lib/case-study";

export function CaseStudyCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <MarkdownFileCard
      fileName="CASE_STUDY.md"
      source={caseStudyMarkdown(project)}
      className={className}
    >
      <div className="px-6 py-8 lg:px-12 lg:py-9 flex flex-col gap-6 font-mono">
        <h2
          id="overview"
          className="m-0 pb-3 border-b border-rule font-semibold text-[26px] scroll-mt-28"
        >
          {project.title}
        </h2>
        {overviewParagraphs(project).map((paragraph) => (
          <p
            key={paragraph}
            className="m-0 text-sm leading-[1.7] text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
        {caseStudySections(project).map((section) => (
          <section key={section.id} className="flex flex-col gap-6">
            <h3
              id={section.id}
              className="m-0 pb-2 border-b border-rule font-semibold text-xl scroll-mt-28"
            >
              {section.title}
            </h3>
            <ul className="m-0 pl-0 list-outside list-disc flex flex-col gap-2 text-sm leading-[1.7] text-foreground-soft marker:text-muted-foreground">
              {section.items.map(({ term, text }) => (
                <li key={text}>
                  {term && (
                    <>
                      <span className="font-semibold text-foreground">{term}</span>
                      {" — "}
                    </>
                  )}
                  {text}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MarkdownFileCard>
  );
}
