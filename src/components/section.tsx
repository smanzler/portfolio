import { cn } from "@/lib/utils";

/**
 * Full-width home section with the numbered eyebrow and title.
 * @param action Content on the right of the title, for example an UnderlineLink.
 */
export function Section({
  id,
  eyebrow,
  title,
  action,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 py-24 lg:py-[120px] min-h-svh flex flex-col justify-center gap-12",
        className
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="m-0 font-display font-semibold text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
