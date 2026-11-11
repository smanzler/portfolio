import Link from "next/link";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { projectPolicies } from "@/features/apps/lib/policies";

/**
 * Mono row of links to the app's policy pages.
 * @param current Href of the policy that the page shows.
 */
export function LegalLinks({
  app,
  current,
}: {
  app: Project;
  current?: string;
}) {
  const policies = projectPolicies(app);
  if (policies.length === 0) return null;

  return (
    <nav aria-label={`${app.title} legal`} className="flex flex-col gap-3">
      <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
        LEGAL
      </span>
      <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
        {policies.map(({ fileName, href }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={href === current ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors",
                href === current && "border-brand text-foreground"
              )}
            >
              <FileText className="size-3.5" aria-hidden="true" />
              {fileName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
