import { Link } from "@tanstack/react-router";
import { LayoutGrid, List } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { projectKind } from "@/features/projects/workspace/lib/folders";

export type WorkspaceView = "grid" | "list";

type ItemsProps = {
  projects: Project[];
  selected?: string;
  onSelect: (slug: string) => void;
};

/**
 * Link to the case study. A plain click calls `onSelect` and does not open
 * the link. A modifier click or a middle click opens the link.
 */
function ItemLink({
  project,
  isSelected,
  onSelect,
  className,
  children,
}: {
  project: Project;
  isSelected: boolean;
  onSelect: (slug: string) => void;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      aria-current={isSelected || undefined}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        onSelect(project.slug);
      }}
      className={cn(
        "border transition-colors",
        isSelected
          ? "bg-code-keyword/16 border-code-keyword/50"
          : "border-transparent hover:bg-white/6",
        className
      )}
    >
      {children}
    </Link>
  );
}

function WorkspaceGrid({ projects, selected, onSelect }: ItemsProps) {
  return (
    <ul className="list-none m-0 p-0 grid grid-cols-3 sm:grid-cols-[repeat(auto-fill,minmax(124px,1fr))] gap-1 lg:gap-3">
      {projects.map((project) => (
        <li key={project.slug}>
          <ItemLink
            project={project}
            isSelected={project.slug === selected}
            onSelect={onSelect}
            className="flex flex-col items-center gap-2.5 lg:gap-3 px-1 lg:px-2 pt-3.5 lg:pt-[18px] pb-3 lg:pb-3.5 rounded-[14px]"
          >
            <img
              src={project.icon}
              alt=""
              className="size-14 lg:size-16 rounded-[14px] lg:rounded-2xl object-cover shadow-[0_8px_18px_rgb(0_0_0/0.35)]"
            />
            <span className="font-mono text-xs lg:text-[13px] text-glass-foreground">
              {project.slug}/
            </span>
          </ItemLink>
        </li>
      ))}
    </ul>
  );
}

const listColumns =
  "grid grid-cols-[minmax(160px,1.3fr)_minmax(110px,1fr)_64px_minmax(180px,2fr)] gap-4 items-center";

function WorkspaceList({ projects, selected, onSelect }: ItemsProps) {
  return (
    <div className="overflow-x-auto">
      <div
        aria-hidden="true"
        className={cn(
          listColumns,
          "min-w-[560px] px-3 pb-2.5 border-b border-white/8 font-mono text-[11px] tracking-[0.08em] text-glass-muted"
        )}
      >
        <span>NAME</span>
        <span>KIND</span>
        <span>YEAR</span>
        <span>STACK</span>
      </div>
      <ul className="list-none m-0 pt-1.5 px-0 min-w-[560px] flex flex-col gap-0.5">
        {projects.map((project) => (
          <li key={project.slug}>
            <ItemLink
              project={project}
              isSelected={project.slug === selected}
              onSelect={onSelect}
              className={cn(listColumns, "min-h-11 px-3 py-1.5 rounded-[10px] font-mono text-[13px]")}
            >
              <span className="flex items-center gap-3 min-w-0">
                <img
                  src={project.icon}
                  alt=""
                  className="size-7 rounded-[7px] object-cover shrink-0"
                />
                <span className="text-glass-foreground">{project.slug}/</span>
              </span>
              <span className="text-code-string">{projectKind(project)}</span>
              <span className="text-glass-foreground">{project.timeline ?? "—"}</span>
              <span className="truncate text-glass-muted">{project.tags.join(" · ")}</span>
            </ItemLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ViewDispatch = {
  label: string;
  icon: LucideIcon;
  Items: (props: ItemsProps) => React.ReactNode;
};

export const viewDispatches: Record<WorkspaceView, ViewDispatch> = {
  grid: { label: "Icon view", icon: LayoutGrid, Items: WorkspaceGrid },
  list: { label: "List view", icon: List, Items: WorkspaceList },
};

export const views = Object.keys(viewDispatches) as WorkspaceView[];
