import { MarkdownFileCard } from "@/components/markdown-file-card";
import {
  changeLabels,
  changeOrder,
  changelogMarkdown,
  releases,
  type Release,
} from "@/features/experience/lib/releases";

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
  return (
    <MarkdownFileCard fileName="CHANGELOG.md" source={changelogMarkdown()}>
      <div className="px-6 pt-8 pb-5 lg:px-12 lg:pt-9">
        <h3 className="m-0 mb-4 pb-3 border-b border-rule font-display font-semibold text-[28px] tracking-[-0.02em]">
          Changelog
        </h3>
        <p className="m-0 mb-2 text-[15px] text-muted-foreground">
          All notable changes to my career. Format based on Keep a Changelog;
          this career adheres to Semantic Versioning.
        </p>
        {releases.map((release, index) => (
          <ReleaseEntry
            key={release.version}
            release={release}
            isLatest={index === 0}
          />
        ))}
      </div>
    </MarkdownFileCard>
  );
}
