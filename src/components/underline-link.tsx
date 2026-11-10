import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Text link with the design underline. An http(s) href opens in a new tab.
 */
export function UnderlineLink({
  href,
  arrow = false,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
  arrow?: boolean;
}) {
  const isExternal = /^https?:/.test(href);

  return (
    <Link
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
      className={cn("inline-flex items-center gap-1.5 font-medium py-3", className)}
    >
      <span className="border-b-[1.5px] border-foreground pb-0.5">
        {children}
      </span>
      {arrow && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </Link>
  );
}
