import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

/** Full-width page container that ends with the site footer. */
export function PageShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id="top"
      className={cn(
        "max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 pt-8 lg:pt-14 min-h-[calc(100svh-7.5rem)] flex flex-col gap-12 lg:gap-16",
        className
      )}
    >
      {children}
      <SiteFooter topHref="#top" />
    </div>
  );
}
