"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { GlassMeta } from "@/components/glass-meta";
import { UnderlineLink } from "@/components/underline-link";
import { Button } from "@/components/ui/button";
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
  const meta = [project.timeline, project.role].filter(
    (item): item is string => Boolean(item)
  );
  const highlight = project.technicalHighlights[0];

  return (
    <article
      id={`project-${project.slug}`}
      className="flex-1 min-w-0 flex flex-col gap-7"
    >
      <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] rounded-[22px] overflow-hidden bg-well">
        <ProjectMedia asset={project.heroAsset} />
        <GlassMeta
          items={[...meta, project.tags.slice(0, 3).join(" · ")]}
          className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-[calc(100%-2rem)] px-[18px] py-3 gap-x-4"
        />
      </div>
      <p className="m-0 font-display font-medium text-2xl lg:text-[30px] leading-[1.3] tracking-[-0.02em] text-foreground-soft">
        {project.description}
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        <Fact label="PROBLEM">{project.problemAndSolution.problem}</Fact>
        <Fact label="WHAT I BUILT">{project.problemAndSolution.solution}</Fact>
        {highlight && <Fact label="HIGHLIGHT">{highlight}</Fact>}
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {project.link && (
          <Button asChild size="pill">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit project
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        )}
        <UnderlineLink href={`/projects/${project.slug}`}>
          Read the case study
        </UnderlineLink>
        {project.github && (
          <UnderlineLink href={project.github}>Source code</UnderlineLink>
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
