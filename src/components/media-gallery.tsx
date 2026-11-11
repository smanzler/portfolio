import { CirclePlay, Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Asset } from "@/lib/projects";
import { FileCard } from "@/components/file-card";
import { ProjectMedia } from "@/components/project-media";

/**
 * FileCard grid of project media.
 * @param portrait Use phone-shaped tiles for app screenshots.
 * @param onOpen Gets the index of the asset in `assets`.
 */
export function MediaGallery({
  slug,
  assets,
  portrait = false,
  onOpen,
}: {
  slug: string;
  assets: Asset[];
  portrait?: boolean;
  onOpen: (index: number) => void;
}) {
  return (
    <FileCard
      icon={<Folder aria-hidden="true" />}
      path={["smanzler", slug, "media/"]}
      aside={<span>{assets.length} files</span>}
    >
      <ul
        className={cn(
          "list-none m-0 p-5 lg:p-8 grid gap-x-5 gap-y-6",
          portrait
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            : "sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {assets.map((asset, index) => (
          <li key={asset.path}>
            <button
              type="button"
              onClick={() => onOpen(index)}
              className="group w-full flex flex-col gap-2.5 text-left cursor-zoom-in"
            >
              <span
                className="relative block w-full rounded-xl overflow-hidden bg-well ring-1 ring-transparent group-hover:ring-brand transition-shadow"
                style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
              >
                <ProjectMedia asset={asset} />
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground group-hover:text-foreground">
                <span className="text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{asset.alt || asset.path}</span>
                {asset.type === "video" && (
                  <CirclePlay className="size-3.5 shrink-0" aria-label="Video" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </FileCard>
  );
}
