"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { ProjectMedia } from "@/features/projects/components/project-media";

function Fact({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
        {label}
      </span>
      <span className="text-[15px] leading-[1.55]">{children}</span>
    </div>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  const meta = [project.timeline, project.role].filter(Boolean);
  const highlight = project.technicalHighlights[0];

  return (
    <article
      id={`project-${project.slug}`}
      className="flex-1 min-w-0 flex flex-col gap-7"
    >
      <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] rounded-[22px] overflow-hidden bg-well">
        <ProjectMedia asset={project.heroAsset} />
        <div className="glass absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-[calc(100%-2rem)] px-[18px] py-3 rounded-xl font-mono text-xs text-glass-foreground flex flex-wrap gap-x-4 gap-y-1">
          {meta.map((item) => (
            <span key={item} className="flex gap-4">
              <span>{item}</span>
              <span className="text-glass-faint">·</span>
            </span>
          ))}
          <span className="text-code-string">
            {project.tags.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>
      <p className="m-0 font-display font-medium text-2xl lg:text-[30px] leading-[1.3] tracking-[-0.02em] text-foreground-soft">
        {project.description}
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        <Fact label="PROBLEM">{project.problemAndSolution.problem}</Fact>
        <Fact label="WHAT I BUILT">{project.problemAndSolution.solution}</Fact>
        {highlight && <Fact label="HIGHLIGHT">{highlight}</Fact>}
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-medium text-[15px]">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-primary-foreground"
          >
            Visit project
            <ArrowUpRight className="size-[15px]" aria-hidden="true" />
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex py-3.5"
        >
          <span className="border-b-[1.5px] border-foreground">
            Read the case study
          </span>
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-3.5"
          >
            <span className="border-b-[1.5px] border-foreground">
              Source code
            </span>
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectReader({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
      <nav
        aria-label="Projects"
        className="lg:flex-[0_0_400px] lg:sticky lg:top-[100px]"
      >
        <ol className="list-none m-0 p-0 border-t border-border">
          {projects.map((project, index) => {
            const isSelected = index === selected;
            return (
              <li key={project.slug}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  aria-controls={`project-${project.slug}`}
                  onClick={() => setSelected(index)}
                  className={cn(
                    "w-full flex items-baseline gap-4 py-4 border-b border-border text-left cursor-pointer transition-colors",
                    isSelected
                      ? "text-foreground"
                      : "text-[#7a7d87] hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs",
                      isSelected ? "text-brand" : "text-muted-foreground"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display font-semibold tracking-[-0.025em] transition-[font-size]",
                      isSelected ? "text-[30px]" : "text-[26px]"
                    )}
                  >
                    {project.title}
                  </span>
                  {isSelected && (
                    <ArrowUpRight
                      className="ml-auto size-[18px] text-brand self-center"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
        <span
          aria-hidden="true"
          className="hidden lg:inline-block mt-5 font-hand font-medium text-2xl text-brand -rotate-2"
        >
          pick one to read about it →
        </span>
      </nav>
      <ProjectArticle project={projects[selected]} />
    </div>
  );
}
