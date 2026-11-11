import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { ProjectMedia } from "@/components/project-media";
import { projectKind } from "@/features/projects/workspace/lib/folders";

export function WorkspacePreview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const facts = [
    { term: "kind", value: projectKind(project), className: "text-code-string" },
    { term: "year", value: project.timeline ?? "—" },
    { term: "role", value: project.role ?? "—" },
    { term: "stack", value: project.tags.join(" · ") },
  ];

  return (
    <>
      <div className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-6 flex flex-col gap-[18px]">
        <div className="relative shrink-0 aspect-[3/2] rounded-[14px] overflow-hidden bg-white/6">
          <ProjectMedia asset={project.heroAsset} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="lg:hidden absolute top-1.5 right-1.5 size-11 flex items-center justify-center rounded-full cursor-pointer"
          >
            <span className="size-[30px] flex items-center justify-center rounded-full bg-glass border border-white/14 text-glass-foreground">
              <X className="size-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="m-0 font-display font-semibold text-[30px] tracking-[-0.025em] text-white">
            {project.title}
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] text-glass-foreground">
            {project.description}
          </p>
        </div>
        <dl className="m-0 grid grid-cols-[52px_minmax(0,1fr)] lg:grid-cols-[72px_minmax(0,1fr)] gap-x-3 lg:gap-x-4 gap-y-2 font-mono text-xs">
          {facts.map(({ term, value, className }) => (
            <div key={term} className="contents">
              <dt className="text-glass-muted">{term}</dt>
              <dd className={cn("m-0 leading-[1.6]", className ?? "text-glass-foreground")}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="shrink-0 flex gap-2.5 p-4 pt-3 lg:px-6 lg:pt-0 lg:pb-6 max-lg:border-t max-lg:border-white/8">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="max-lg:flex-1 inline-flex items-center justify-center gap-2 min-h-11 px-[18px] rounded-full bg-white text-sm font-medium text-foreground hover:bg-white/90 transition-colors"
        >
          Case study
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-11 min-w-11 lg:px-[18px] rounded-full border border-white/20 text-sm font-medium text-glass-foreground hover:bg-white/8 transition-colors"
          >
            <span className="max-lg:sr-only">Live site</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </>
  );
}
