import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

/**
 * 404 page in the site style.
 * @param folder Mono folder name in the error line, for example "work/".
 */
export function NotFoundScreen({
  title,
  folder,
  back,
}: {
  title: string;
  folder: string;
  back: { href: string; label: string };
}) {
  return (
    <PageShell>
      <PageHeader
        eyebrow="404 / NOT FOUND"
        title={title}
        className="flex-1 justify-center"
      >
        <p className="m-0 max-w-[560px] font-mono text-sm leading-[1.7] text-muted-foreground">
          <span className="text-brand">error:</span> pathspec did not match
          anything in {folder}. It may have moved, or it never existed.
        </p>
        <Button asChild size="pill" className="self-start">
          <Link href={back.href}>
            <ArrowLeft aria-hidden="true" />
            {back.label}
          </Link>
        </Button>
      </PageHeader>
    </PageShell>
  );
}
