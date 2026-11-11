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
          <span className="font-semibold text-2xl">
            [{release.version}]
          </span>
          {isLatest && (
            <span className="px-2.5 py-[3px] rounded-full bg-brand text-xs text-white">
              latest
            </span>
          )}
        </div>
        <span className="text-[13px] text-muted-foreground">
          {release.start} – {release.end}
        </span>
        <div className="flex items-center gap-3 pt-1.5">
          <span
            aria-hidden="true"
            className="flex-[0_0_40px] size-10 rounded-[10px] bg-well flex items-center justify-center text-[11px] font-medium text-muted-foreground"
          >
            {release.monogram}
          </span>
          <span className="text-sm font-medium">
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
          <h4 className="m-0 font-semibold text-xl">
            {release.role}
          </h4>
          <span className="text-xs text-muted-foreground">
            {release.technologies.join(" · ")}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {changeOrder.map((kind) => {
            const items = release.changes[kind];
            if (!items?.length) return null;
            return (
              <div key={kind} className="flex flex-col gap-1.5">
                <h5 className="m-0 font-normal text-xs tracking-[0.06em] text-muted-foreground">
                  {changeLabels[kind]}
                </h5>
                <ul className="m-0 pl-0 list-outside list-disc text-sm leading-[1.7] text-foreground-soft marker:text-muted-foreground">
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
      <div className="px-6 pt-8 pb-5 lg:px-12 lg:pt-9 font-mono">
        <h3 className="m-0 mb-4 pb-3 border-b border-rule font-semibold text-[26px]">
          Changelog
        </h3>
        <p className="m-0 mb-2 text-sm text-muted-foreground">
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
