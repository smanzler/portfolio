"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { AssetLightboxDialog } from "@/components/asset-lightbox-dialog";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { UnderlineLink } from "@/components/underline-link";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/features/projects/components/case-study-card";
import { CaseStudyContents } from "@/features/projects/components/case-study-contents";
import { MediaGallery } from "@/components/media-gallery";
import { ProjectCover } from "@/features/projects/components/project-cover";
import { ProjectFact } from "@/features/projects/components/project-fact";

export default function ProjectScreen({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const assets = project.assets ?? [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageShell>
      <PageHeader
        back={{ href: "/projects", label: "work/" }}
        eyebrow={`CASE STUDY / ${project.slug.toUpperCase()}`}
        title={project.title}
        lead={project.description}
      >
        {(project.link || project.github) && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {project.link && (
              <Button asChild size="pill">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit project
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            )}
            {project.github && (
              <UnderlineLink href={project.github} arrow>
                Source code
              </UnderlineLink>
            )}
          </div>
        )}
      </PageHeader>

      <ProjectCover project={project} onOpen={() => openLightbox(0)} />

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <ProjectFact label="PROBLEM">{project.problemAndSolution.problem}</ProjectFact>
        <ProjectFact label="WHAT I BUILT">{project.problemAndSolution.solution}</ProjectFact>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
        <CaseStudyContents
          project={project}
          className="lg:flex-[0_0_280px] lg:sticky lg:top-[100px]"
        />
        <div className="flex-1 min-w-0 flex flex-col gap-10">
          <CaseStudyCard project={project} />
          {assets.length > 0 && (
            <div id="media" className="scroll-mt-28">
              <MediaGallery
                slug={project.slug}
                assets={assets}
                portrait={project.isApp}
                onOpen={(index) => openLightbox(index + 1)}
              />
            </div>
          )}
        </div>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group flex items-end justify-between gap-6 py-8 border-y border-border"
      >
        <span className="flex flex-col gap-2 min-w-0">
          <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
            NEXT PROJECT
          </span>
          <span className="font-display font-semibold text-[32px] lg:text-[44px] leading-none tracking-[-0.03em] truncate">
            {next.title}
          </span>
        </span>
        <ArrowRight
          className="size-7 shrink-0 text-brand transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>

      <AssetLightboxDialog
        assets={[project.heroAsset, ...assets]}
        open={lightboxOpen}
        setOpen={setLightboxOpen}
        initialIndex={lightboxIndex}
      />
    </PageShell>
  );
}
