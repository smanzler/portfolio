import { Link } from "@tanstack/react-router";
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
}: React.ComponentProps<"a"> & {
  href: string;
  arrow?: boolean;
}) {
  const isInternal = href.startsWith("/");
  const isExternal = /^https?:/.test(href);
  const linkProps = {
    ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
    ...props,
    className: cn("inline-flex items-center gap-1.5 font-medium py-3", className),
  };
  const content = (
    <>
      <span className="border-b-[1.5px] border-foreground pb-0.5">
        {children}
      </span>
      {arrow && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </>
  );

  return isInternal ? (
    <Link to={href} {...linkProps}>
      {content}
    </Link>
  ) : (
    <a href={href} {...linkProps}>
      {content}
    </a>
  );
}
