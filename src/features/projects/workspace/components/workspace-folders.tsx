import { Folder as FolderIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import type { Folder } from "@/features/projects/workspace/lib/folders";
import {
  folderDispatches,
  folders,
  projectsIn,
} from "@/features/projects/workspace/lib/folders";

export function WorkspaceFolders({
  projects,
  selected,
  onSelect,
}: {
  projects: Project[];
  selected: Folder;
  onSelect: (folder: Folder) => void;
}) {
  return (
    <>
      <span className="px-3 pt-1 pb-2 font-mono text-[11px] tracking-[0.08em] text-glass-muted">
        FOLDERS
      </span>
      {folders.map((folder) => {
        const isSelected = folder === selected;
        return (
          <button
            key={folder}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(folder)}
            className={cn(
              "flex items-center gap-2.5 min-h-12 lg:min-h-11 px-3 rounded-[10px] font-mono text-sm font-medium cursor-pointer transition-colors",
              isSelected
                ? "bg-code-keyword/16 text-code-keyword"
                : "text-glass-foreground hover:bg-white/6"
            )}
          >
            <FolderIcon className="size-4" aria-hidden="true" />
            <span className="flex-1 text-left">{folderDispatches[folder].label}</span>
            <span className="text-xs text-glass-muted">
              {projectsIn(folder, projects).length}
            </span>
          </button>
        );
      })}
    </>
  );
}
