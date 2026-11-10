import { cn } from "@/lib/utils";

type Value = string | string[] | boolean;

const fields: { key: string; value: Value; desktopOnly?: boolean }[] = [
  { key: "name", value: "Simon Manzler" },
  { key: "role", value: "Software Developer" },
  { key: "location", value: "Cincinnati, OH", desktopOnly: true },
  { key: "stack", value: ["TypeScript", "React", "C#"] },
  { key: "focus", value: "web & mobile apps", desktopOnly: true },
  { key: "available", value: true },
];

function Literal({ value }: { value: Value }) {
  if (typeof value === "boolean") {
    return <span className="text-code-keyword">{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, index) => (
          <span key={item}>
            <span className="text-code-string">&apos;{item}&apos;</span>
            {index < value.length - 1 && ", "}
          </span>
        ))}
        ]
      </>
    );
  }
  return <span className="text-code-string">&apos;{value}&apos;</span>;
}

export function EngineerCard({ className }: { className?: string }) {
  return (
    <div className={cn("glass rounded-[14px] overflow-hidden", className)}>
      <div className="flex items-center gap-1.5 lg:gap-2 px-3.5 py-2.5 lg:px-[18px] lg:py-3.5 border-b border-white/8">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className="size-[9px] lg:size-[11px] rounded-full bg-white/18"
          />
        ))}
        <span className="ml-2 lg:ml-2.5 font-mono text-[11px] lg:text-xs text-glass-muted">
          engineer.ts
        </span>
      </div>
      <pre className="m-0 px-4 pt-3.5 pb-4 lg:px-6 lg:pt-[22px] lg:pb-[26px] font-mono text-[11.5px] lg:text-[13px] leading-[1.8] lg:leading-[1.85] text-glass-foreground overflow-hidden">
        <code>
          <span className="text-code-keyword">const</span> engineer = {"{"}
          {"\n"}
          {fields.map(({ key, value, desktopOnly }) => (
            <span key={key} className={cn(desktopOnly && "hidden lg:inline")}>
              {"  "}
              {key}: <Literal value={value} />,{"\n"}
            </span>
          ))}
          {"};"}
        </code>
      </pre>
    </div>
  );
}
