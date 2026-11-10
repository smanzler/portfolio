"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { readme, readmeMarkdown } from "@/features/about/lib/readme";

type View = "preview" | "code";

const views: { id: View; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

function Preview() {
  const { greeting, intro, currently, stack } = readme;
  return (
    <div className="flex flex-col gap-6">
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
  );
}

export function ReadmeCard({ className }: { className?: string }) {
  const [view, setView] = useState<View>("preview");

  return (
    <article
      className={cn(
        "rounded-2xl bg-card border border-border shadow-[0_12px_32px_rgb(20_21_26/0.06)] overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 h-[52px] border-b border-rule font-mono text-[13px] text-muted-foreground">
        <span className="flex items-center gap-2.5 min-w-0">
          <FileText className="size-4 shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="hidden sm:inline">smanzler / </span>
            <span className="text-foreground">README.md</span>
          </span>
        </span>
        <div
          role="group"
          aria-label="README view"
          className="flex gap-1 p-[3px] rounded-lg bg-muted"
        >
          {views.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={view === id}
              onClick={() => setView(id)}
              className={cn(
                "px-3 py-[5px] rounded-md cursor-pointer",
                view === id &&
                  "bg-white text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06)]"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 px-6 py-8 lg:px-12 lg:py-9">
        {view === "preview" ? (
          <Preview />
        ) : (
          <pre className="m-0 font-mono text-sm leading-[1.8] text-foreground-soft whitespace-pre-wrap">
            {readmeMarkdown()}
          </pre>
        )}
      </div>
    </article>
  );
}
