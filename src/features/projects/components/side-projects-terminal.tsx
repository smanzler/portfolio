import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { GlassWindow } from "@/components/glass-window";

export function SideProjectsTerminal({ projects }: { projects: Project[] }) {
  return (
    <GlassWindow title="~/side-projects — zsh" className="rounded-[18px] font-mono">
      <div className="py-5 text-sm sm:text-[15px] leading-6 text-glass-foreground flex flex-col">
        <div className="px-6">
          <span className="text-code-keyword">~/side-projects</span>{" "}
          <span className="text-glass-faint">$</span> ls
        </div>
        <ul className="list-none m-0 p-0 flex flex-col">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group flex flex-wrap md:flex-nowrap items-center px-6 text-glass-foreground hover:bg-white/10 hover:shadow-[inset_3px_0_0_var(--color-code-keyword)] transition-colors"
              >
                <span className="w-[12ch] shrink-0 text-code-keyword font-bold underline-offset-3 group-hover:underline">
                  {project.slug}/
                </span>
                <span className="w-[14ch] shrink-0 text-code-string">
                  {project.tags[0]}
                </span>
                <span className="basis-full md:basis-auto flex-1 min-w-0 truncate text-glass-faint group-hover:text-glass-foreground">
                  # {project.description}
                </span>
                <ArrowUpRight
                  className="hidden md:block ml-3 size-3.5 shrink-0 text-code-keyword opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6">
          <span className="text-code-keyword">~/side-projects</span>{" "}
          <span className="text-glass-faint">$</span>{" "}
          <span
            aria-hidden="true"
            className="inline-block w-[9px] h-[18px] bg-glass-foreground align-[-3px] animate-pulse"
          />
        </div>
      </div>
    </GlassWindow>
  );
}
