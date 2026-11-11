import { useState } from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import type { Folder } from "@/features/projects/workspace/lib/folders";
import { folderDispatches, projectsIn } from "@/features/projects/workspace/lib/folders";
import { WorkspaceFolders } from "@/features/projects/workspace/components/workspace-folders";
import { WorkspacePreview } from "@/features/projects/workspace/components/workspace-preview";
import type { WorkspaceView } from "@/features/projects/workspace/components/workspace-items";
import { viewDispatches, views } from "@/features/projects/workspace/components/workspace-items";

export function ProjectWorkspace({ projects }: { projects: Project[] }) {
  const [folder, setFolder] = useState<Folder>("all");
  const [slug, setSlug] = useState(projects.at(0)?.slug);
  const [view, setView] = useState<WorkspaceView>("grid");
  const [foldersOpen, setFoldersOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const shown = projectsIn(folder, projects);
  const selected = shown.find((project) => project.slug === slug) ?? shown.at(0);
  const { Items } = viewDispatches[view];

  const closeDrawers = () => {
    setFoldersOpen(false);
    setPreviewOpen(false);
  };

  return (
    <div className="glass rounded-[18px] overflow-hidden text-glass-foreground">
      <div className="flex items-center gap-2 h-[52px] pl-1 pr-2 lg:px-5 border-b border-white/8">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className="hidden lg:block size-[11px] rounded-full bg-white/18"
          />
        ))}
        <button
          type="button"
          aria-label="Folders"
          aria-expanded={foldersOpen}
          aria-controls="workspace-folders"
          onClick={() => {
            setFoldersOpen(!foldersOpen);
            setPreviewOpen(false);
          }}
          className={cn(
            "lg:hidden size-11 flex items-center justify-center rounded-[10px] cursor-pointer transition-colors",
            foldersOpen ? "bg-code-keyword/16 text-code-keyword" : "text-glass-foreground"
          )}
        >
          <PanelLeft className="size-[18px]" aria-hidden="true" />
        </button>
        <span className="lg:ml-3 min-w-0 truncate font-mono text-xs">
          ~<span className="max-lg:hidden">/smanzler</span>/work/
          {folder !== "all" && (
            <span className="text-code-keyword">{folderDispatches[folder].label}</span>
          )}
        </span>
        <span className="ml-auto shrink-0 font-mono text-[11px] lg:text-xs text-glass-muted">
          {shown.length} items
        </span>
        <div role="group" aria-label="View" className="shrink-0 flex gap-0.5 p-0.5 rounded-[10px] bg-white/6">
          {views.map((option) => {
            const { label, icon: Icon } = viewDispatches[option];
            const isSelected = option === view;
            return (
              <button
                key={option}
                type="button"
                aria-label={label}
                aria-pressed={isSelected}
                onClick={() => setView(option)}
                className={cn(
                  "w-8 h-7 flex items-center justify-center rounded-lg cursor-pointer transition-colors",
                  isSelected ? "bg-white/14 text-white" : "text-glass-muted hover:text-glass-foreground"
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="relative flex min-h-[500px] lg:min-h-[640px] overflow-hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape") closeDrawers();
        }}
      >
        <nav
          id="workspace-folders"
          aria-label="Folders"
          className={cn(
            "flex flex-col gap-0.5 lg:gap-1 px-2 py-3 lg:px-3 lg:py-5 bg-[#1c1d22] lg:bg-transparent border-r border-white/8",
            "max-lg:absolute max-lg:inset-y-0 max-lg:left-0 max-lg:z-20 max-lg:w-[236px] max-lg:shadow-[16px_0_32px_rgb(0_0_0/0.35)] lg:w-[220px] lg:shrink-0",
            "transition-[translate,visibility] duration-200",
            !foldersOpen && "max-lg:invisible max-lg:-translate-x-full"
          )}
        >
          <WorkspaceFolders
            projects={projects}
            selected={folder}
            onSelect={(next) => {
              setFolder(next);
              setFoldersOpen(false);
            }}
          />
        </nav>

        <div className="flex-1 min-w-0 p-3 lg:p-7">
          <Items
            projects={shown}
            selected={selected?.slug}
            onSelect={(next) => {
              setSlug(next);
              setPreviewOpen(true);
              setFoldersOpen(false);
            }}
          />
        </div>

        {(foldersOpen || previewOpen) && (
          <button
            type="button"
            aria-label="Close"
            onClick={closeDrawers}
            className="lg:hidden absolute inset-0 z-10 bg-[rgb(14_15_18/0.55)] cursor-pointer"
          />
        )}

        {selected && (
          <aside
            aria-label="Selected project"
            className={cn(
              "flex flex-col bg-[#1c1d22] lg:bg-white/3 border-l border-white/8",
              "max-lg:absolute max-lg:inset-y-0 max-lg:right-0 max-lg:z-20 max-lg:w-[300px] max-lg:max-w-[85%] max-lg:shadow-[-16px_0_32px_rgb(0_0_0/0.35)] lg:w-[360px] lg:shrink-0",
              "transition-[translate,visibility] duration-200",
              !previewOpen && "max-lg:invisible max-lg:translate-x-full"
            )}
          >
            <WorkspacePreview project={selected} onClose={() => setPreviewOpen(false)} />
          </aside>
        )}
      </div>
    </div>
  );
}
