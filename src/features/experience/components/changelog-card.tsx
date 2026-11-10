"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  changeLabels,
  changeOrder,
  changelogMarkdown,
  releases,
  type Release,
} from "@/features/experience/lib/releases";

type View = "preview" | "code";

const views: { id: View; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

function ReleaseEntry({ release, isLatest }: { release: Release; isLatest: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 py-8 border-b border-rule last:border-b-0">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span className="font-display font-semibold text-[26px] tracking-[-0.02em]">
            [{release.version}]
          </span>
          {isLatest && (
            <span className="px-2.5 py-[3px] rounded-full bg-brand font-mono text-xs text-white">
              latest
            </span>
          )}
        </div>
        <span className="font-mono text-[13px] text-muted-foreground">
          {release.start} – {release.end}
        </span>
        <div className="flex items-center gap-3 pt-1.5">
          <span
            aria-hidden="true"
            className="flex-[0_0_40px] size-10 rounded-[10px] bg-well flex items-center justify-center font-mono text-[11px] font-medium text-muted-foreground"
          >
            {release.monogram}
          </span>
          <span className="text-[15px] font-medium">
            {release.company}
            <br />
            <span className="font-normal text-muted-foreground">
              {release.location}
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-1.5">
          <h4 className="m-0 font-display font-semibold text-[22px] tracking-[-0.015em]">
            {release.role}
          </h4>
          <span className="font-mono text-xs text-muted-foreground">
            {release.technologies.join(" · ")}
          </span>
        </div>
        <div className="grid gap-7 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {changeOrder.map((kind) => {
            const items = release.changes[kind];
            if (!items?.length) return null;
            return (
              <div key={kind} className="flex flex-col gap-1.5">
                <h5 className="m-0 font-display font-semibold text-[15px] text-foreground-soft">
                  {changeLabels[kind]}
                </h5>
                <ul className="m-0 pl-5 list-disc text-[15px] leading-[1.75] text-muted-foreground">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ChangelogCard() {
  const [view, setView] = useState<View>("preview");

  return (
    <article className="rounded-2xl bg-card border border-border shadow-[0_12px_32px_rgb(20_21_26/0.06)] overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 h-[52px] border-b border-rule font-mono text-[13px] text-muted-foreground">
        <span className="flex items-center gap-2.5 min-w-0">
          <FileText className="size-4 shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="hidden sm:inline">smanzler / </span>
            <span className="text-foreground">CHANGELOG.md</span>
          </span>
        </span>
        <div
          role="group"
          aria-label="CHANGELOG view"
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
      {view === "preview" ? (
        <div className="px-6 pt-8 pb-5 lg:px-12 lg:pt-9">
          <h3 className="m-0 mb-4 pb-3 border-b border-rule font-display font-semibold text-[28px] tracking-[-0.02em]">
            Changelog
          </h3>
          <p className="m-0 mb-2 text-[15px] text-muted-foreground">
            All notable changes to my career. Format based on Keep a
            Changelog; this career adheres to Semantic Versioning.
          </p>
          {releases.map((release, index) => (
            <ReleaseEntry
              key={release.version}
              release={release}
              isLatest={index === 0}
            />
          ))}
        </div>
      ) : (
        <pre className="m-0 px-6 py-8 lg:px-12 lg:py-9 font-mono text-sm leading-[1.8] text-foreground-soft whitespace-pre-wrap">
          {changelogMarkdown()}
        </pre>
      )}
    </article>
  );
}
