import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function SideProjectsTerminal({ projects }: { projects: Project[] }) {
  return (
    <div className="glass rounded-[18px] overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className="size-[11px] rounded-full bg-white/18"
          />
        ))}
        <span className="ml-3 text-xs text-glass-muted">
          ~/side-projects — zsh
        </span>
      </div>
      <div className="px-2 sm:px-6 pt-6 pb-7 text-sm sm:text-[15px] leading-[1.6] text-glass-foreground flex flex-col gap-3">
        <div className="px-4">
          <span className="text-code-keyword">~/side-projects</span>{" "}
          <span className="text-glass-faint">$</span> ls
        </div>
        <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[220px_minmax(0,1fr)_140px_24px] gap-x-6 gap-y-1 items-center px-4 py-3 rounded-lg text-glass-foreground hover:bg-white/6 transition-colors"
              >
                <span className="text-code-keyword font-medium">
                  {project.slug}/
                </span>
                <span className="text-code-string md:order-3">
                  {project.tags[0]}
                </span>
                <span className="col-span-2 md:col-span-1 md:order-2 text-glass-faint truncate">
                  # {project.description}
                </span>
                <ArrowUpRight
                  className="hidden md:block md:order-4 size-3.5 text-glass-faint"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4">
          <span className="text-code-keyword">~/side-projects</span>{" "}
          <span className="text-glass-faint">$</span>{" "}
          <span
            aria-hidden="true"
            className="inline-block w-[9px] h-[18px] bg-glass-foreground align-[-3px] animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}
