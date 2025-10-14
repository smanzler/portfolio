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
import { useNavigate } from "react-router";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

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

  const handleClick = (id: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    navigate("/portfolio/", {
      state: {
        id: id,
      },
    });
  };

  return (
    <motion.header
      className="fixed w-full z-55"
      animate={{
        top: isScrolled ? (isVisible ? "20px" : "-80px") : "0",
      }}
      transition={{ duration: 0.4, ease: [0.1, 0.6, 0.3, 0.95] }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={cn(
            "mx-auto rounded-xl transition-colors max-w-5xl",
            isScrolled
              ? "bg-card shadow-lg backdrop-blur-lg supports-[backdrop-filter]:bg-card/50"
              : "bg-transparent"
          )}
          animate={{
            padding: isScrolled ? "0.5rem 1.5rem" : "0.5rem 0rem",
          }}
          transition={{ duration: 0.3, ease: [0.1, 0.6, 0.3, 0.95] }}
        >
          <div className="h-12 flex justify-between items-center mx-auto">
            <Button variant="ghost" onClick={(e) => handleClick("home", e)}>
              <span className="font-bold">Simon Manzler</span>
            </Button>

            <nav className="flex items-center">
              <div className="hidden md:flex">
                <Button
                  variant="ghost"
                  onClick={(e) => handleClick("projects", e)}
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  onClick={(e) => handleClick("about", e)}
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  onClick={(e) => handleClick("contact", e)}
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
                    <DropdownMenuItem onSelect={() => handleClick("projects")}>
                      Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleClick("about")}>
                      About
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleClick("contact")}>
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
