import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

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

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", {
        state: {
          id: id,
        },
      });
    }
  };

  return (
    <motion.header
      className="fixed left-0 right-0 z-5"
      animate={{
        top: isScrolled ? (isVisible ? "20px" : "-80px") : "0",
      }}
      transition={{ duration: 0.4, ease: [0.1, 0.6, 0.3, 0.95] }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={cn(
            "mx-auto rounded-full transition-colors max-w-5xl flex justify-between items-center mx-auto",
            isScrolled
              ? "bg-card shadow-lg backdrop-blur-lg supports-[backdrop-filter]:bg-card/50"
              : "bg-transparent"
          )}
          animate={{
            padding: isScrolled ? "4px 24px" : "4px 4px",
          }}
          transition={{ duration: 0.3, ease: [0.1, 0.6, 0.3, 0.95] }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => handleClick("home", e)}
          >
            <img
              src="/src/assets/simon-icon.png"
              alt="Simon Manzler"
              className="h-6 w-6"
            />
          </Button>

          <nav className="flex items-center">
            <div className="hidden md:flex">
              <Button
                variant="ghost"
                onClick={(e) => handleClick("projects", e)}
              >
                Projects
              </Button>
              <Button variant="ghost" onClick={(e) => handleClick("about", e)}>
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
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>
                      <img
                        src="/src/assets/simon-icon.png"
                        alt="Simon Manzler"
                        className="h-6 w-6"
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col">
                    <Button
                      variant="link"
                      className="justify-start"
                      onClick={(e) => handleClick("projects", e)}
                    >
                      Projects
                    </Button>
                    <Button
                      variant="link"
                      className="justify-start"
                      onClick={(e) => handleClick("about", e)}
                    >
                      About
                    </Button>
                    <Button
                      variant="link"
                      className="justify-start"
                      onClick={(e) => handleClick("contact", e)}
                    >
                      Contact
                    </Button>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="ghost">
                        <X className="h-6 w-6" />
                        Close
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
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
