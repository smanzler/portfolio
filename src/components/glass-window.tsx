import { cn } from "@/lib/utils";

/**
 * Dark glass window with three title-bar dots.
 * @param compact Use the smaller title bar below the lg breakpoint.
 */
export function GlassWindow({
  title,
  compact = false,
  className,
  children,
}: {
  title: string;
  compact?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("glass overflow-hidden", className)}>
      <div
        className={cn(
          "flex items-center gap-2 px-5 py-3.5 border-b border-white/8",
          compact && "max-lg:gap-1.5 max-lg:px-3.5 max-lg:py-2.5"
        )}
      >
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className={cn(
              "size-[11px] rounded-full bg-white/18",
              compact && "max-lg:size-[9px]"
            )}
          />
        ))}
        <span
          className={cn(
            "ml-3 font-mono text-xs text-glass-muted",
            compact && "max-lg:ml-2 max-lg:text-[11px]"
          )}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
