"use client";

import { RotateCw } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { UnderlineLink } from "@/components/underline-link";
import { Button } from "@/components/ui/button";

/** 500 page in the site style. */
export function ErrorScreen({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageShell>
      <PageHeader
        eyebrow="500 / ERROR"
        title="Something broke"
        className="flex-1 justify-center"
      >
        <p className="m-0 max-w-[560px] font-mono text-sm leading-[1.7] text-muted-foreground">
          <span className="text-brand">fatal:</span> this page did not load. Try
          again, or go back home.
          {error.digest && (
            <span className="block text-faint">digest: {error.digest}</span>
          )}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Button size="pill" onClick={reset}>
            <RotateCw aria-hidden="true" />
            Try again
          </Button>
          <UnderlineLink href="/">Back home</UnderlineLink>
        </div>
      </PageHeader>
    </PageShell>
  );
}
