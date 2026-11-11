import type { Policy } from "@/lib/projects";
import { MarkdownFileCard } from "@/components/markdown-file-card";
import { policyMarkdown } from "@/features/apps/lib/policies";

export function PolicyCard({
  title,
  fileName,
  policy,
}: {
  title: string;
  fileName: string;
  policy: Policy;
}) {
  return (
    <MarkdownFileCard fileName={fileName} source={policyMarkdown(title, policy)}>
      <div className="px-6 py-8 lg:px-12 lg:py-9 flex flex-col gap-6 font-mono">
        <div className="flex flex-col gap-2 pb-3 border-b border-rule">
          <h2 className="m-0 font-semibold text-[26px]">{title}</h2>
          {policy.lastUpdated && (
            <span className="text-[13px] text-muted-foreground">
              Last updated: {policy.lastUpdated}
            </span>
          )}
        </div>
        {policy.sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <h3 className="m-0 pb-2 border-b border-rule font-semibold text-lg">
              {section.title}
            </h3>
            {section.content.map((content, index) =>
              typeof content === "string" ? (
                <p
                  key={index}
                  className="m-0 text-sm leading-[1.7] text-foreground-soft"
                >
                  {content}
                </p>
              ) : (
                <ul
                  key={index}
                  className="m-0 pl-0 list-outside list-disc flex flex-col gap-1.5 text-sm leading-[1.7] text-foreground-soft marker:text-muted-foreground"
                >
                  {content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}
      </div>
    </MarkdownFileCard>
  );
}
