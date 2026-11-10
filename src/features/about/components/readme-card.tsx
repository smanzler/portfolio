import { MarkdownFileCard } from "@/components/markdown-file-card";
import { readme, readmeMarkdown } from "@/features/about/lib/readme";

export function ReadmeCard({ className }: { className?: string }) {
  const { greeting, intro, currently, stack } = readme;

  return (
    <MarkdownFileCard
      fileName="README.md"
      source={readmeMarkdown()}
      className={className}
    >
      <div className="flex-1 px-6 py-8 lg:px-12 lg:py-9 flex flex-col gap-6">
        <h3 className="m-0 pb-3 border-b border-rule font-display font-semibold text-[28px] lg:text-[32px] tracking-[-0.02em]">
          {greeting}
        </h3>
        <p className="m-0 text-[17px] leading-[1.7] text-muted-foreground">
          {intro}
        </p>
        <h4 className="m-0 pb-2 border-b border-rule font-display font-semibold text-xl">
          Currently
        </h4>
        <ul className="m-0 pl-[22px] list-disc text-base leading-[1.9] text-foreground-soft">
          <li>
            {currently.role}{" "}
            <span className="text-brand">{currently.company}</span>
          </li>
          <li>Learning {currently.learning}</li>
          <li>Off the clock: {currently.offTheClock}</li>
        </ul>
        <h4 className="m-0 pb-2 border-b border-rule font-display font-semibold text-xl">
          Stack
        </h4>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="px-[11px] py-[5px] rounded-md bg-muted font-mono text-[13px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MarkdownFileCard>
  );
}
