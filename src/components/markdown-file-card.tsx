
import { useState } from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { FileCard } from "@/components/file-card";

type View = "preview" | "code";

const views: { id: View; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

type TokenKind = "text" | "marker" | "heading" | "strong" | "code";

type Token = { kind: TokenKind; text: string };

const tokenClasses: Record<TokenKind, string> = {
  text: "",
  marker: "text-brand",
  heading: "font-semibold text-foreground",
  strong: "font-semibold text-foreground",
  code: "text-brand",
};

const inlinePattern = /(\*\*[^*]+\*\*|`[^`]+`)/;

const inlineRules: [RegExp, TokenKind][] = [
  [/^\*\*.+\*\*$/, "strong"],
  [/^`.+`$/, "code"],
];

function tokenizeInline(text: string): Token[] {
  return text
    .split(inlinePattern)
    .filter(Boolean)
    .map((part) => ({
      kind: inlineRules.find(([pattern]) => pattern.test(part))?.[1] ?? "text",
      text: part,
    }));
}

function tokenizeLine(line: string): Token[] {
  const heading = /^(#{1,6} )(.*)$/.exec(line);
  if (heading) {
    return [
      { kind: "marker", text: heading[1] },
      { kind: "heading", text: heading[2] },
    ];
  }
  const listItem = /^(\s*[-*] )(.*)$/.exec(line);
  if (listItem) {
    return [
      { kind: "marker", text: listItem[1] },
      ...tokenizeInline(listItem[2]),
    ];
  }
  return tokenizeInline(line);
}

function MarkdownSource({ source }: { source: string }) {
  return (
    <pre className="m-0 pb-6 font-mono text-sm leading-[1.8] text-foreground-soft">
      <code className="grid grid-cols-[auto_1fr]">
        {source.split("\n").map((line, index) => (
          <div
            key={index}
            className="col-span-2 grid grid-cols-subgrid hover:bg-muted/60"
          >
            <span
              aria-hidden="true"
              className="pl-5 pr-4 lg:pl-8 border-r border-rule text-right tabular-nums text-muted-foreground/60 select-none"
            >
              {index + 1}
            </span>
            <span className="pl-5 pr-6 lg:pr-12 whitespace-pre-wrap break-words">
              {tokenizeLine(line).map((token, tokenIndex) => (
                <span key={tokenIndex} className={tokenClasses[token.kind]}>
                  {token.text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}

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
                  "bg-white text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06)]",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      }
    >
      {view === "preview" ? children : <MarkdownSource source={source} />}
    </FileCard>
  );
}
