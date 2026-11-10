"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { FileCard } from "@/components/file-card";

type View = "preview" | "code";

const views: { id: View; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

/**
 * FileCard for a markdown file, with a Preview and Code toggle.
 * @param source Raw markdown that the Code view shows.
 */
export function MarkdownFileCard({
  fileName,
  source,
  className,
  children,
}: {
  fileName: string;
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [view, setView] = useState<View>("preview");

  return (
    <FileCard
      icon={<FileText aria-hidden="true" />}
      path={["smanzler", fileName]}
      className={className}
      aside={
        <div
          role="group"
          aria-label={`${fileName} view`}
          className="flex gap-1 p-[3px] rounded-lg bg-muted"
        >
          {views.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={view === id}
              onClick={() => setView(id)}
              className={cn(
                "px-3 py-[5px] rounded-md cursor-pointer",
                view === id &&
                  "bg-white text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06)]"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      }
    >
      {view === "preview" ? (
        children
      ) : (
        <pre className="m-0 px-6 py-8 lg:px-12 lg:py-9 font-mono text-sm leading-[1.8] text-foreground-soft whitespace-pre-wrap">
          {source}
        </pre>
      )}
    </FileCard>
  );
}
