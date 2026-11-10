import { cn } from "@/lib/utils";

/**
 * Light card with a repository-style path bar.
 * @param path Path segments; all but the last hide below the sm breakpoint.
 * @param aside Content on the right of the path bar.
 */
export function FileCard({
  icon,
  path,
  aside,
  className,
  children,
}: {
  icon: React.ReactNode;
  path: string[];
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const prefix = path.slice(0, -1);
  const name = path[path.length - 1];

  return (
    <div
      className={cn(
        "rounded-2xl bg-card border border-border shadow-[0_12px_32px_rgb(20_21_26/0.06)] overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 h-[52px] border-b border-rule font-mono text-[13px] text-muted-foreground">
        <span className="flex items-center gap-2.5 min-w-0 [&>svg]:size-4 [&>svg]:shrink-0">
          {icon}
          <span className="truncate">
            {prefix.length > 0 && (
              <span className="hidden sm:inline">{prefix.join(" / ")} / </span>
            )}
            <span className="text-foreground">{name}</span>
          </span>
        </span>
        {aside}
      </div>
      {children}
    </div>
  );
}
