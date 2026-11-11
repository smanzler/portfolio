import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { GlassMeta } from "@/components/glass-meta";
import { ProjectMedia } from "@/components/project-media";

/**
 * Hero media with a glass tag for the timeline, role and first tags.
 * @param onOpen When set, the cover is a button that calls it.
 */
export function ProjectCover({
  project,
  onOpen,
  className,
}: {
  project: Project;
  onOpen?: () => void;
  className?: string;
}) {
  const meta = [project.timeline, project.role].filter(
    (item): item is string => Boolean(item)
  );
  const { width, height } = project.heroAsset;
  const aspectRatio = width >= height ? `${width} / ${height}` : "3 / 2";
  const Root = onOpen ? "button" : "div";

  return (
    <Root
      {...(onOpen && {
        type: "button",
        onClick: onOpen,
        "aria-label": `Open ${project.title} media`,
      })}
      className={cn(
        "relative block w-full rounded-[22px] overflow-hidden bg-well",
        onOpen && "cursor-zoom-in",
        className
      )}
      style={{ aspectRatio }}
    >
      <ProjectMedia asset={project.heroAsset} />
      <GlassMeta
        items={[...meta, project.tags.slice(0, 3).join(" · ")]}
        className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-[calc(100%-2rem)] px-[18px] py-3 gap-x-4 text-left"
      />
    </Root>
  );
}
