"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { UnderlineLink } from "@/components/underline-link";
import { Button } from "@/components/ui/button";
import { ProjectCover } from "@/features/projects/components/project-cover";
import { ProjectFact } from "@/features/projects/components/project-fact";

function ProjectArticle({ project }: { project: Project }) {
  const highlight = project.technicalHighlights[0];

  return (
    <article
      id={`project-${project.slug}`}
      className="flex-1 min-w-0 flex flex-col gap-7"
    >
      <ProjectCover project={project} />
      <p className="m-0 font-display font-medium text-2xl lg:text-[30px] leading-[1.3] tracking-[-0.02em] text-foreground-soft">
        {project.description}
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        <ProjectFact label="PROBLEM">{project.problemAndSolution.problem}</ProjectFact>
        <ProjectFact label="WHAT I BUILT">{project.problemAndSolution.solution}</ProjectFact>
        {highlight && <ProjectFact label="HIGHLIGHT">{highlight}</ProjectFact>}
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
