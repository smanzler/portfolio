import { GlassWindow } from "@/components/glass-window";
import { cn } from "@/lib/utils";

type Value = string | string[];

const fields: { key: string; value: Value; desktopOnly?: boolean }[] = [
  { key: "name", value: "Simon Manzler" },
  { key: "role", value: "Software Engineer" },
  { key: "location", value: "Cincinnati, OH", desktopOnly: true },
  { key: "stack", value: ["TypeScript", "React", "C#"] },
  { key: "focus", value: "web & mobile apps", desktopOnly: true },
];

function Literal({ value }: { value: Value }) {
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
    <GlassWindow title="engineer.ts" compact className={cn("rounded-[14px]", className)}>
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
    </GlassWindow>
  );
}
