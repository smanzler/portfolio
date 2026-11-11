import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Folder } from "lucide-react";
import { FileCard } from "@/components/file-card";

export type DirectoryEntry = {
  href: string;
  name: string;
  title: string;
  description: string;
  icon?: string;
  tags: string[];
  note?: string;
};

/**
 * FileCard that lists entries as linked rows, like a repository folder.
 * @param path Path segments of the folder; the last one is the folder name.
 */
export function DirectoryCard({
  path,
  entries,
}: {
  path: string[];
  entries: DirectoryEntry[];
}) {
  return (
    <FileCard
      icon={<Folder aria-hidden="true" />}
      path={path}
      aside={<span>{entries.length} items</span>}
    >
      <ul className="list-none m-0 p-0">
        {entries.map((entry) => (
          <li key={entry.href} className="border-b border-rule last:border-b-0">
            <Link
              to={entry.href}
              className="group grid grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-x-5 gap-y-1 px-5 py-5 lg:px-8 hover:bg-muted/60 transition-colors"
            >
              <span className="row-span-2 lg:row-span-1 relative size-12 rounded-xl overflow-hidden bg-well">
                {entry.icon && (
                  <img
                    src={entry.icon}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
              </span>
              <span className="flex flex-col gap-1 min-w-0 lg:flex-row lg:items-baseline lg:gap-6">
                <span className="lg:w-[220px] lg:shrink-0 flex items-baseline gap-3">
                  <span className="font-display font-semibold text-[22px] tracking-[-0.02em] text-foreground">
                    {entry.title}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {entry.name}
                  </span>
                </span>
                <span className="text-[15px] leading-[1.6] text-foreground-soft lg:truncate">
                  {entry.description}
                </span>
              </span>
              <ArrowUpRight
                className="row-span-2 lg:row-span-1 size-[18px] text-muted-foreground group-hover:text-brand transition-colors"
                aria-hidden="true"
              />
              <span className="col-start-2 lg:col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                {entry.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
                {entry.note && <span className="text-brand">{entry.note}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </FileCard>
  );
}
