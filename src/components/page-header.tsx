import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Page title block with a mono back link and eyebrow.
 * @param back Link to the parent page; `label` shows in mono, for example "work/".
 * @param aside Content on the right of the title, for example an app icon.
 * @param children Actions below the lead.
 */
export function PageHeader({
  back,
  eyebrow,
  title,
  lead,
  aside,
  className,
  children,
}: {
  back?: { href: string; label: string };
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className={cn("flex flex-col gap-6", className)}>
      {back && (
        <Link
          to={back.href}
          className="self-start inline-flex items-center gap-2 py-2 font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {back.label}
        </Link>
      )}
      <div className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5 min-w-0">
          <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
            {eyebrow}
          </span>
          <h1 className="m-0 font-display font-semibold text-[44px] lg:text-[64px] leading-[1.02] tracking-[-0.035em]">
            {title}
          </h1>
        </div>
        {aside}
      </div>
      {lead && (
        <p className="m-0 max-w-[860px] font-display font-medium text-2xl lg:text-[30px] leading-[1.3] tracking-[-0.02em] text-foreground-soft">
          {lead}
        </p>
      )}
      {children}
    </header>
  );
}
