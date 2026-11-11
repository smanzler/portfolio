"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { AssetLightboxDialog } from "@/components/asset-lightbox-dialog";
import { MarkdownFileCard } from "@/components/markdown-file-card";
import { MediaGallery } from "@/components/media-gallery";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { UnderlineLink } from "@/components/underline-link";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/features/apps/components/faq-list";
import { LegalLinks } from "@/features/apps/components/legal-links";
import { ReviewList } from "@/features/apps/components/review-list";
import { appMarkdown, appParagraphs } from "@/features/apps/lib/app-readme";

function Block({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
          {eyebrow}
        </span>
        <h2 className="m-0 font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.025em]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function AppScreen({ app }: { app: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const assets = app.assets ?? [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageShell>
      <PageHeader
        back={{ href: "/apps", label: "apps/" }}
        eyebrow={`APP / ${app.slug.toUpperCase()}`}
        title={app.title}
        lead={app.description}
        aside={
          <span className="relative size-16 lg:size-24 shrink-0 rounded-[18px] lg:rounded-[24px] overflow-hidden bg-well shadow-[0_12px_32px_rgb(20_21_26/0.10)]">
            <Image
              src={app.icon}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </span>
        }
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {app.link && (
            <Button asChild size="pill">
              <a href={app.link} target="_blank" rel="noopener noreferrer">
                Get the app
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          )}
          <UnderlineLink href={`/projects/${app.slug}`}>
            Read the case study
          </UnderlineLink>
          {app.github && (
            <UnderlineLink href={app.github} arrow>
              Source code
            </UnderlineLink>
          )}
        </div>
      </PageHeader>

      {assets.length > 0 && (
        <MediaGallery
          slug={app.slug}
          assets={assets}
          portrait
          onOpen={openLightbox}
        />
      )}

      <MarkdownFileCard fileName="APP.md" source={appMarkdown(app)}>
        <div className="px-6 py-8 lg:px-12 lg:py-9 flex flex-col gap-6 font-mono">
          <h2 className="m-0 pb-3 border-b border-rule font-semibold text-[26px]">
            {app.title}
          </h2>
          {appParagraphs(app).map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 text-sm leading-[1.7] text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <h3 className="m-0 pb-2 border-b border-rule font-semibold text-xl">
            Features
          </h3>
          <ul className="m-0 pl-0 list-outside list-disc flex flex-col gap-2 text-sm leading-[1.7] text-foreground-soft marker:text-muted-foreground">
            {app.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </MarkdownFileCard>

      {app.reviews && app.reviews.length > 0 && (
        <Block eyebrow="REVIEWS" title="What people say">
          <ReviewList reviews={app.reviews} />
        </Block>
      )}

      {app.faq && app.faq.length > 0 && (
        <Block eyebrow="FAQ" title="Questions">
          <FaqList faq={app.faq} />
        </Block>
      )}

      <LegalLinks app={app} />

      {assets.length > 0 && (
        <AssetLightboxDialog
          assets={assets}
          open={lightboxOpen}
          setOpen={setLightboxOpen}
          initialIndex={lightboxIndex}
        />
      )}
    </PageShell>
  );
}
