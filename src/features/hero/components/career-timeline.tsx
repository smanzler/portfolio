import { cn } from "@/lib/utils";

const entries = [
  {
    company: "P0 Security",
    caption: "now · Software Engineer",
    current: true,
  },
  {
    company: "Western & Southern Financial Group",
    caption: "prev · Software Developer Intern",
    current: false,
  },
];

export function CareerTimeline() {
  return (
    <ol className="m-0 ml-[5px] py-0.5 pl-[22px] list-none flex flex-col gap-3.5 border-l border-border">
      {entries.map(({ company, caption, current }) => (
        <li key={company} className="relative flex flex-col gap-0.5">
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1.5 -left-7 size-[11px] rounded-full ring-4 ring-background",
              current
                ? "bg-brand"
                : "border border-muted-foreground bg-background",
            )}
          />
          <span
            className={cn(
              "font-mono text-sm leading-[22px]",
              current ? "font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {company}
          </span>
          <span className="font-mono text-xs leading-[18px] text-muted-foreground">
            {caption}
          </span>
        </li>
      ))}
    </ol>
  );
}
