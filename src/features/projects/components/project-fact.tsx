export function ProjectFact({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-[0.06em] text-muted-foreground">
        {label}
      </span>
      <span className="text-[15px] leading-[1.7] text-foreground-soft">{children}</span>
    </div>
  );
}
