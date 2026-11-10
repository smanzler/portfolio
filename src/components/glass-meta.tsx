import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass tag that joins items with dots. The last item uses the string color.
 */
export function GlassMeta({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass px-4 py-2.5 rounded-xl font-mono text-xs text-glass-foreground flex flex-wrap gap-x-3 gap-y-1",
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={item}>
            <span className={cn(isLast && "text-code-string")}>{item}</span>
            {!isLast && <span className="text-glass-faint">·</span>}
          </Fragment>
        );
      })}
    </div>
  );
}
