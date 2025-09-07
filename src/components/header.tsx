import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const isScrolledNow = latest > 50;
      const isScrollingDown = latest > lastScrollY.current;

      // Always show header when near top
      if (!isScrolledNow) {
        setIsVisible(true);
      } else {
        // When scrolled, show on scroll up, hide on scroll down
        setIsVisible(!isScrollingDown);
      }

      setIsScrolled(isScrolledNow);
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed w-full z-50"
      animate={{
        top: isScrolled ? (isVisible ? "20px" : "-100px") : "0",
      }}
      transition={{ duration: 0.4, ease: [0.1, 0.6, 0.3, 0.95] }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={cn(
            "mx-auto rounded-full transition-colors max-w-7xl",
            isScrolled
              ? "bg-secondary/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-secondary/80"
              : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          )}
          animate={{
            padding: isScrolled ? "0.5rem 1.5rem" : "0.5rem 0rem",
          }}
          transition={{ duration: 0.3, ease: [0.1, 0.6, 0.3, 0.95] }}
        >
          <div className="h-12 flex justify-between items-center mx-auto">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
              className="flex items-center space-x-2"
            >
              <span className="text-xl font-bold">Simon Manzler</span>
            </a>

            <nav className="flex items-center">
              <div className="hidden md:flex">
                <Button
                  variant="ghost"
                  className="text-lg"
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  className="text-lg"
                  onClick={() => handleScroll("about")}
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  className="text-lg"
                  onClick={() => handleScroll("contact")}
                >
                  Contact
                </Button>
              </div>

              <div className="flex items-center">
                <ModeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <MenuIcon className="h-6 w-6" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => handleScroll("projects")}>
                      Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleScroll("about")}>
                      About
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleScroll("contact")}>
                      Contact
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
