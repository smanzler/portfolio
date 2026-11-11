"use client";

import { cn, scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useActiveSection } from "@/features/layout/hooks/useActiveSection";

type NavItem = {
  label: string;
  href: string;
  section?: string;
  route?: string;
};

const navItems: NavItem[] = [
  { label: "work/", href: "/#projects", section: "projects", route: "/projects" },
  { label: "README.md", href: "/#about", section: "about" },
  { label: "CHANGELOG.md", href: "/#experience", section: "experience" },
];

const contactItem: NavItem = {
  label: "New issue",
  href: "/#contact",
  section: "contact",
};

const sectionFiles: Record<string, string> = {
  projects: "work/",
  about: "README.md",
  experience: "CHANGELOG.md",
  contact: "issues/new",
};

const sectionIds = ["home", ...Object.keys(sectionFiles)];

function isActive(item: NavItem, pathname: string, activeSection?: string) {
  if (pathname === "/") return item.section === activeSection;
  return !!item.route && pathname.startsWith(item.route);
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, selectSection] = useActiveSection(sectionIds, isHome);

  const activeHref = navItems.find((item) =>
    isActive(item, pathname, activeSection)
  )?.href;
  const [underlinedHref, setUnderlinedHref] = useState(
    activeHref ?? navItems[0].href
  );
  if (activeHref && activeHref !== underlinedHref) {
    setUnderlinedHref(activeHref);
  }

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  const navigate = (href: string) => {
    if (isHome && href.startsWith("/#")) {
      const id = href.slice(2);
      if (sectionIds.includes(id)) selectSection(id);
      scrollToSection(id);
    } else {
      router.push(href);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(e.currentTarget.getAttribute("href") || "/");
  };

  const activeFile = activeSection && sectionFiles[activeSection];
  const path = isHome
    ? ["portfolio", ...(activeFile ? [activeFile] : [])]
    : ["portfolio", ...pathname.split("/").filter(Boolean)];
  const prefix = path.slice(0, -1);
  const name = path[path.length - 1];

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 z-40 transition-[padding] duration-300",
        isScrolled && "px-4"
      )}
      initial={{ top: "-80px" }}
      animate={{
        top: isScrolled ? "20px" : "0",
      }}
      transition={{ duration: 0.4, ease: [0.1, 0.6, 0.3, 0.95] }}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-4 border-b border-border font-mono text-muted-foreground transition-all duration-300",
          isScrolled
            ? "max-w-[960px] h-[52px] pl-[18px] pr-2 rounded-2xl border bg-card shadow-[0_12px_32px_rgb(20_21_26/0.10)] text-[13px]"
            : "max-w-[1440px] h-[73px] px-5 md:px-12 xl:px-24 text-sm"
        )}
      >
        <Link
          href="/#home"
          onClick={handleClick}
          className="flex items-center gap-2.5 min-w-0"
        >
          <Image
            src="/simon-icon.png"
            alt="Simon Manzler"
            width={26}
            height={26}
            loading="eager"
            className={cn(
              "rounded-full bg-well shrink-0 transition-all duration-300",
              isScrolled ? "size-[22px]" : "size-[26px]"
            )}
          />
          {isScrolled ? (
            <span className="truncate">
              {prefix.length > 0 && (
                <span className="hidden sm:inline">
                  {prefix.join(" / ")} /{" "}
                </span>
              )}
              <span className="text-foreground">{name}</span>
            </span>
          ) : (
            <span className="truncate">
              smanzler <span className="text-muted-foreground/70">/</span>{" "}
              <span className="text-foreground font-bold">portfolio</span>
            </span>
          )}
        </Link>

        <nav
          aria-label="Main"
          className="hidden md:flex items-center gap-0.5 self-stretch"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClick}
              aria-current={
                isActive(item, pathname, activeSection) ? "page" : undefined
              }
              className={cn(
                "relative flex items-center px-3 hover:text-foreground transition-colors",
                isScrolled ? "self-stretch" : "h-11",
                isActive(item, pathname, activeSection) && "text-foreground"
              )}
            >
              {item.label}
              {item.href === underlinedHref && (
                <motion.span
                  layoutId="header-nav-underline"
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-brand"
                  initial={false}
                  animate={{ scaleX: activeHref ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </Link>
          ))}
          <Link
            href={contactItem.href}
            onClick={handleClick}
            className="ml-2 flex items-center h-9 px-3.5 rounded-full bg-primary text-primary-foreground font-sans text-[13px] font-medium"
          >
            {contactItem.label}
          </Link>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Open menu"
            className="md:hidden flex items-center justify-center size-11 shrink-0 rounded-full text-foreground cursor-pointer"
          >
            <Menu className="size-[18px]" aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="font-mono min-w-44">
            {[...navItems, contactItem].map((item) => (
              <DropdownMenuItem
                key={item.href}
                onSelect={() => navigate(item.href)}
                className={cn(
                  "text-[13px] text-muted-foreground",
                  isActive(item, pathname, activeSection) && "text-foreground"
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}
